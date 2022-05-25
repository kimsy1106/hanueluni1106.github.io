from flask import Flask, request, make_response
from flask import render_template

import requests
from bs4 import BeautifulSoup
from urllib.parse import quote
import re
import numpy as np
from scipy import stats
import time
from itertools import product
import torch

api_key = "RGAPI-1a1d24de-0002-4894-85cc-6deaf6ec560e"

#모델을 불러온다.(입력 파라미터 갯수 = 12*5 + 2 = 62)

load_model = torch.load('/home/sykim1106/mysite/model.py')

import datetime as pydatetime

def get_now():
    """
        현재 시스템 시간을 datetime형으로 반환
    """
    return pydatetime.datetime.now()

def get_now_timestamp():
    """
        현재 시스템 시간을 POSIX timestamp float형으로 반환
    """
    return get_now().timestamp()

#실전용    
def getMatchId(puuid):
    matchIds = []
    endTime = int( get_now_timestamp() )
    r = requests.get(f'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?endTime={endTime}&queue=420&type=ranked&start=0&count=5&api_key={api_key}')
    matchIds = r.json()
    if len(matchIds) >= 3:
        return matchIds[:3]
    else:
        return []

#인자 : 아군 5명 닉네임 리스트
def getPredictionData(nicknames):
    
    #아군 puuid
    puuids = []
    for nickname in nicknames:
        print(nickname)
        puuids.append(getPuuid(nickname))
    
    fiveSummonersData = []
    
    for puuid in puuids:
        print(puuid)
        #각 소환사들의 이전 전적을 가져오고 평균낸다.
        oneSummonersData = []
        tempData = []
        matchIds = getMatchId(puuid)
        #match 갯수가 기준 미만인 경우, return 
        if len(matchIds) != 3 : 
        
            pass
        else:
            for matchId in matchIds:
                print(matchId)
                tempData.append(getMatchData(puuid , matchId))
        print(tempData[0])        
        for i in range(len(tempData[0])):
            oneSummonersData.append("{:.4f}".format((tempData[0][i]+tempData[1][i]+tempData[2][i])/3))    
            
        fiveSummonersData.extend(oneSummonersData)
    
    if len(fiveSummonersData) == 85:
        return fiveSummonersData
    else:
        pass
    

def getMatchData(puuid , matchId):
    try:
        matchData = []
      
        r = requests.get(f'https://asia.api.riotgames.com/lol/match/v5/matches/{matchId}?api_key={api_key}')
        data = r.json()
        #게임 진행시간(초 단위)
        gameDuration = data['info']['gameDuration'] 

        #puuid 인덱스(0 ~ 9)
        #모든 변수들을 통합하기 위해서 시간대는 10~ 15분으로 하겠다. 아니면 20으로 하던지
        index = data['metadata']['participants'].index(puuid)   #자신의 인덱스

        e_index = (index + 5)%10  # 상대의 인덱스 , 0 ~ 4 든, 5 ~ 9 번 인덱스의 경우이든 다 적용될 수 있다. 

        summonerData = data['info']['participants'][index]   #나의 데이터
        enemyData = data['info']['participants'][e_index]    #상대의 데이터

        fBA = 1 if summonerData['firstBloodAssist'] else 0
        fBK = 1 if summonerData['firstBloodKill'] else 0
        fTA = 1 if summonerData['firstTowerAssist'] else 0
        fTK = 1 if summonerData['firstTowerKill'] else 0

        e_fBA = 1 if enemyData['firstBloodAssist'] else 0
        e_fBK = 1 if enemyData['firstBloodKill'] else 0
        e_fTA = 1 if enemyData['firstTowerAssist'] else 0
        e_fTK = 1 if enemyData['firstTowerKill'] else 0

        matchData.append((fBA - e_fBA)/gameDuration)
        matchData.append((fBK - e_fBK)/gameDuration)
        matchData.append((fTA - e_fTA)/gameDuration)
        matchData.append((fTK - e_fTK)/gameDuration)

        matchData.append((summonerData['champLevel'] - enemyData['champLevel'])/gameDuration)
        matchData.append((summonerData['timeCCingOthers'] - enemyData['timeCCingOthers'])/gameDuration)
        matchData.append((summonerData['totalDamageDealt'] - enemyData['totalDamageDealt'])/gameDuration)
        matchData.append((summonerData['totalDamageDealtToChampions'] - enemyData['totalDamageDealtToChampions'])/gameDuration)
        matchData.append((summonerData['totalDamageShieldedOnTeammates'] - enemyData['totalDamageShieldedOnTeammates'])/gameDuration)
        matchData.append((summonerData['totalDamageTaken'] - enemyData['totalDamageTaken'])/gameDuration)
        matchData.append((summonerData['totalHealsOnTeammates'] - enemyData['totalHealsOnTeammates'])/gameDuration)
        matchData.append((summonerData['totalMinionsKilled'] - enemyData['totalMinionsKilled'])/gameDuration)
        matchData.append((summonerData['visionScore'] - enemyData['visionScore'])/gameDuration)
        matchData.append((summonerData['longestTimeSpentLiving'] - enemyData['longestTimeSpentLiving'])/gameDuration)
        matchData.append((summonerData['dragonKills'] - enemyData['dragonKills'])/gameDuration)
        matchData.append((summonerData['killingSprees'] - enemyData['killingSprees'])/gameDuration)
        matchData.append((summonerData['goldEarned'] - enemyData['goldEarned'])/gameDuration)
        
        return matchData
    except:
        pass



COUNT = 10
WANTCOUNT = 5
MINGAMEDURATION = 15

def getSummonerName(i):
    names = []
    
    payload = {'start' : str(i)}
    response = requests.post(url="http://fow.kr/neo_ranking.php" , data=payload)
    html = response.text
    
    soup = BeautifulSoup(html, "html.parser")
    for i in range(50):
        names.append(soup.select_one("tr:nth-child("+str(i+1)+") > td:nth-child(2) > a").text)
    return names


def getPuuid(nickname):
    
    if len(nickname) == 2:
        nickname = nickname[0] + " " + nickname[1]
    else:
        nickname = nickname
        
    r = requests.get("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+quote(nickname)+"?api_key="+api_key)
    puuid = r.json()["puuid"]
    return puuid


def getTrainMatchId(puuid):
    
    matchIdsOver15 = []
    r = requests.get(f'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/{puuid}/ids?queue=420&type=ranked&start=0&count={COUNT}&api_key={api_key}')
    matchIds = r.json()    
    count = 0
    for matchId in matchIds:
        response = requests.get(f"https://asia.api.riotgames.com/lol/match/v5/matches/{matchId}?api_key={api_key}")
        gameDuration = round(response.json()['info']['gameDuration']/60)
        if (gameDuration >= MINGAMEDURATION) and (count < WANTCOUNT):
            matchIdsOver15.append(matchId)
            count = count + 1
            #print(gameDuration)
        else:
            break
            
    return matchIdsOver15

app = Flask(__name__)



@app.route('/riot.txt')
def txt():
    return render_template("riot.txt")


  
    return render_template("return.html", winrate = str(winPercentage) + "%", sentence = "AI가 본 " + str(len(predictCase)) + "개 미래 중 " + str(predictCase.count(1)) +"개의 미래에서 승리"  )


@app.route('/search')
def hi():
    data = request.args.get('players')
    #플레이어의 닉네임 5개를 받아와서 , 분리시키고 리스트(players)에 저장.
    players = data.split(",")[:5]  #5명 닉네임 받아오기
    data = getPredictionData(players)

    clf = torch.load('pre_model.py')
    print(data)
    result = "승리" if clf.predict(np.array(data).reshape(1,-1))[0]  == 1 else "패배"
    print(result)
    return f'{result}'
    return render_template("return.html", isWin = result , sentence = "default"  )




if __name__ == '__main__':

    app.run()
