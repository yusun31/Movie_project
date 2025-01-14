# NETCHA - 사용자 경험 기반 영화 추천 사이트

---

#### [ 배포주소 ](http://aa45ad59075e14ae2a4538dee06b9869-1628875909.ap-northeast-3.elb.amazonaws.com/)

#### [ 기획안 Notion ](https://www.notion.so/Multicampus-project-bdc0abab72cc42d297399b5f6ccc9e21)

## 🖥 프로젝트 기획 배경

> Reactjs와 Django를 이용한 클라이언트 - 서버를 구성하고 이를 활용한 웹서비스 개발한다.
>
> Docker & Kubernetes를 활용하여 CI/CD파이프라인을 구성하고 배포한다.

## 🚀팀구성

![image](https://user-images.githubusercontent.com/98939242/169683773-fd3c0d93-a720-45ce-9956-e004f762dee8.png)

## 🚀역할

![image](https://user-images.githubusercontent.com/98939242/169683793-1c890eeb-42e3-45a0-a180-3a5abe792936.png)

## 개발스택

![image](https://user-images.githubusercontent.com/98939242/169683821-68a4befb-ca54-452b-aa21-cb6e078208a2.png)

## 프로젝트 상세 설명

1.  여러 사용자가 여러 영화에 평점과 리뷰를 생성할 수있습니다.

2.  해당 정보를 기반으로 사용자가 좋아할 수 있는 영화를 추천해줍니다.

3.  보고 싶은 영화 또는 좋아하는 영화는 좋아요 기능을 통해 저장해두었다가 바로 확인 할 수 있습니다.

4.  영화에 대한 정보가 부족하다면 페이지 내에서 Youtube 검색 기능을 통해 관련 영상을 검색할 수 있습니다.

5.  장르별로 영화를 구분하여 보고싶은 장르만 따로 골라 볼 수 있습니다.

6.  검색기능을통해 찾고싶은 영화가 있을 경우 쉽게 찾을 수 있습니다.

---

<B>ERD</B>
![image](https://user-images.githubusercontent.com/98939242/169684192-a5c55c8d-f841-4826-b769-e1c6000cf5d2.png)

<B>Flow chart</B>

![image](https://user-images.githubusercontent.com/98939242/169684225-6b82d81e-4afa-41e2-813e-6dcf6c05da40.png)

![image](https://user-images.githubusercontent.com/98939242/169684239-b4c91396-5372-46d0-a6e2-77640e387fed.png)

---

## 📚주요기능

- 로그인 / 회원가입 기능

  ![register login](https://user-images.githubusercontent.com/98939242/169698476-3de83ab1-50f1-4560-a6c8-faa29905b6ee.gif)
  <br>

- 메인페이지 / 배너 기능

  ![mainpage](https://user-images.githubusercontent.com/98939242/169698428-9f516959-a73b-40e3-999b-28f2558e7178.gif)
  <br>

- 장르 검색 기능

  ![search_action](https://user-images.githubusercontent.com/98939242/169698517-83b59864-8cd9-4b6c-ae28-d659fceb639d.gif)
  <br>

- 키워드 검색 기능

  ![search_keyword(좋아요까지한번에)](https://user-images.githubusercontent.com/98939242/169698526-002e7132-7538-4c64-8b25-0e1a5a433da0.gif)
  <br>

- 좋아요 기능 / 내가 찜한 페이지

  ![like](https://user-images.githubusercontent.com/98939242/169698402-4c17232b-f14a-4353-a0af-511dcbafb36b.gif)
  <br>

- 리뷰 작성 & 수정 & 삭제 기능

  ![review](https://user-images.githubusercontent.com/98939242/169698513-65ef7952-4460-4e90-aad7-99df83e4e037.gif)
  <br>

- 추천 기능

  ![recommend](https://user-images.githubusercontent.com/98939242/169698464-35e668b0-0595-48c8-ad80-7284be2332f3.gif)
  <br>

- Youtube 검색기능

  ![youtube_api](https://user-images.githubusercontent.com/98939242/169698533-8f6694e7-b909-4803-8b0a-d5443ad71533.gif)

* [기능별 API 설명](https://ivy-feather-a16.notion.site/NETCHA-MOVIES-ACCOUNTS-API-back-992e2f31830d4edcaefcce9c5bc53aaf)

---

## 📟 회고록

- 느낀점:
 장고에 대해서 학습했음에도 불구하고, 배운 지 오래되다 보니 기억이 안 나서 다시 공부하며 백엔드 코드를 짰습니다. 코드가 잘 작동하는지에 대해서 배포하기 전에 체크를 해보니 영화가 중복돼서 나오거나, '좋아요' 추천에서는 '좋아요'를 누른 영화까지 추천하는 등 다양한 오류가 났습니다. RDS를 사용해서 배포할 때 IP를 잘못 줘서 그 원인을 찾는 데 3시간이 넘게 헤맸고, Kubernetes로 배포하는 것도 RDS를 연결할 때 한글 오류가 나서 해결하는 데 시간이 걸렸습니다. 로컬에서는 잘 돌아갔지만, 배포할 때 계속 오류가 나는 것을 보고 실전에 적용하는 것은 학습과는 다르다는 것을 느꼈습니다. 그래도 비록 짧은 시간이었지만, 모두 열심히 해준 팀원분들께 감사하고 좋은 결과물을 이룬 것 같아 뿌듯했습니다.

- 아쉬웠던 부분:
 원래는 Github Action을 통해서 배포하려고 했으나, 시간이 부족해서 사용하지 못한 점이 아쉬웠습니다. 또한, aws를 통해서 도메인을 구입해 배포 주소를 변경하고 싶었지만, 해보지 않은 것을 시도하는데 어려움이 있어 사용하지 못한 점이 아쉬웠습니다.
