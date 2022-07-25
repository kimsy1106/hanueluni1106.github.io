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
    
