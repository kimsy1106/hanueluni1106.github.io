# hanueluni1106.github.io


### 모각코 1주차 (0702 08:00a.m. ~ 11:00a.m.)

#### 개인 목표
    1. MNIST 실습 및 환경설정 확인
    2. 데이터 과학 정리
    

![image](https://user-images.githubusercontent.com/53938323/176979133-0f01bcbd-9358-434a-918a-784fc6b31cfc.png)

![image](https://user-images.githubusercontent.com/53938323/176980967-60430069-d689-4849-a254-1b3b02a239dd.png)

    MNIST 코드 설명과정에서 까먹고 넘어갔던 것들을 다시 상기시킬 수 있었음.
    추가로 CiFar10 데이터셋에서 ResNET 을 학습시켜보았음.(참고 코드 : https://www.kaggle.com/code/amyjang/tensorflow-cifar10-cnn-tutorial/notebook)
    
![image](https://user-images.githubusercontent.com/53938323/176982058-a7c3b872-2278-4a9d-a396-8a5278f944e4.png)


### 모각코 2주차 (0716 20:00p.m. ~ 23:00p.m.)

#### 개인 목표
    1. 판다스 라이브러리 기초 공부
    2. 데이터 전처리 코드 리뷰
    
    kaggle 과 dacon 에서 상위 5% 의 유저들 코드를 보면, 전처리에서 많은 노력을 할애한 것을 알 수 있었다.
    그 외에도 1등의 코드는 단순히 모델 보다는, 통계에 기반한 전처리를 보여주는 것을 보면서 통계 공부를 계획중이다.
    
    
![image](https://user-images.githubusercontent.com/53938323/179662973-1e7b1b7d-e55f-4414-8ee5-a7296d7a4087.png)


### 모각코 3주차 (0723 09:00a.m. ~ 12:05p.m.)

#### 개인 목표

    1. 오토케라스로 MNIST 이미지를 분류해본다.


#### 진행 중

    초반에 Auto keras 사용법을 몰라서 모델은 hidden 인줄 알았는데, 
    MNIST 를 사용하다가 매 trial 마다 어떤 모델을 썼는지 확인할 수 있었다. 그전에는 작은 csv 파일이어서 금방금방 넘어가다 보니 못봤던것 같다.

    추가적으로 Titanic 예제 외에 Space Titanic 이라는 kaggle 대회에 있는 데이터셋을 훈련시켜보았다.
    https://www.kaggle.com/competitions/spaceship-titanic

    기존 타이타닉 예제에서 공부힌 EDA 를 적용하여 데이터를 전처리하고 훈련시켜본 결과, 약 80.3 % 의 검증 정확도를 얻을 수 있었다.
    여기서 각 부대시설 이용료가 매우 연속적이어서 해당 칼럼들을 제외하고 훈련시켰을때에는 약 73% 로, 7% 넘게 내려간 것을 보아 전처리가 필요한 칼럼임을 알 수 있었다.
    많은 NaN 값(약 1000개) 가 있는 칼럼으로서, NaN 값을 어떻게 채울 것인지 현재도 분석 중이다.

    이번에 SW 중심대학에서 열리는 경진대회 준비할 겸 다음주까지 85% 로 올려보고자 한다.
    
### 모각코 4주차 (0806 09:00p.m. ~ 12:05a.m.)

#### 개인 목표

    1. feature engineering 을 통한 Dacon SW ai 경진대회 submission 81% 달성
    2. 전처리 코드 및 wandb.ai 연동
    
#### 진행 중

    처음에 76% 나오던 모델의 정확도를 80.6% 까지 향상시켰는데, 
    다른 팀들은 85% 이상 올리는걸 보면서 통계적 분석에 대한 부족함을 크게 느끼는 중이다.
    ADP 교재랑 구글링을 통해서 
    PCA, Factor Analysis, 등을 통해 전처리를 하고 있지만 여전히 85% 를 못넘겨서 어디가 부족한지 찾아가는 중,
    
    
### 모각코 5주차 (0816 10:00p.m. ~ 01:05p.m.)

#### 개인 목표

    1. [SW중심대학 공동 AI 경진대회 ❮예선❯] 데이터셋 전처리 및 feature engineering 코드 공유
    2. [학부연구생] personalized federated learning 논문 리뷰
    
#### 진행 중

    연속적인 데이터들 또는 그에 준하는 데이터들에 대하여 정규화 및 skewness 보정을 하였다.
    데이터 컬럼을 train 만 보고 전처리했었는데 test 와 train 에서의 모델 성능차이가 6% 이상나와서 
    데이터의 전처리가 test 에는 왜곡되어 처리된다 가정하고 각 데이터들의 분포를 확인했다.
    
    1. age : 나이의 경우, 평균에 비해 표준편차가 지나치게 큰 것을 보고 이상치를 해결하기로 결정
    
![image](https://user-images.githubusercontent.com/53938323/185534735-1eb2c55e-1508-446f-bfcf-e7c96869773b.png)

    최솟값은 13살로 동일하고, 최대값은 3만 이상이 존재. 이는 평균과 분산을 충분히 왜곡할 수 있는 값이어서 
    온라인 설문조사 데이터를 감안하여 70세 이상은 삭제하였다. 그 결과 평균과 분산이 동일해졌다.
    
![image](https://user-images.githubusercontent.com/53938323/185534780-510cc90e-aa9f-4182-ac4a-6c5ca2df122f.png)

    해당 그래프를 보다시피, 포아송분포로 되어있다. 이를 정규화시키기 위해 로그 변환으로 정규화를 진행하였다.
    
![image](https://user-images.githubusercontent.com/53938323/185534801-81e68831-b01d-4c0c-aeb4-3618b7caaef9.png)

    그 외에도 Q문항 점수의 합, 응답시간(elapse) 등 에 대해서도 정규화를 하였다.
    
![image](https://user-images.githubusercontent.com/53938323/185534821-4d4477fe-5b96-4c23-8d4a-2456560036e7.png)


#### 느낀점

    수업 이론으로 듣던 내용들 (factor analysis , ANOVA , corrmap 등)을 이번 대회를 통해  직접 적용해보면서 데이터 전처리/분석 과정을 익혀서 좋다.
    이전에 했던 토이프로젝트에서 단순히 raw 데이터에 모델 파라미터 수정으로 작업한 것이 있었는데, 이번 경험을 살려서 성능향상을 할 수 있다는 자신감이 생겼다.
    근데 이렇게 해도 80% 대 인데, 90% 를 찍은 팀들은 뭐지? 라는 생각이 계속 들었다.
    
    
#### 다음계획

    이제 모델을 건드려보려한다. NN + LGBM 앙상블을 적용한 다른 팀의 코드를 적용해보고자 한다.
    
    
    
    
### 모각코 6주차 (0818 10:00p.m. ~ 01:05p.m.)
    
    
    
