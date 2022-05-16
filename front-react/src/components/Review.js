import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Review.css";

function Review(id) {
  //현재까지의 달린 리뷰객체 담기
  const [reviews, setReviews] = useState([]);
  //생성할 리뷰 담기
  const [comment, setComment] = useState();
  const [rank, setRank] = useState();
  const dupCheck = [];
  //수정할 리뷰 id 담기

  //리뷰 생성 API 호출
  const createReview = () => {
    axios({
      url: "http://127.0.0.1:8000/movies/review/" + { id }.id.id + "/",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(() => {
      if (dupCheck.some((dupCheck) => dupCheck == localStorage.getItem("pk"))) {
        alert("이미 리뷰를 작성하셨습니다.");
      } else {
        axios({
          url:
            "http://127.0.0.1:8000/movies/review_create/" + { id }.id.id + "/",
          method: "post",
          data: {
            content: { comment }.comment,
            rank: { rank }.rank,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then(() => {
            setReviewList();
          })
          .catch((err) => {
            alert("평점은 1 ~ 10 사이의 수 이어야 합니다.");
          });
      }
    });
    setComment("");
    setRank("");
  };

  useEffect(() => {
    setReviewList();
  }, []);

  //리뷰리스트 보여주기
  const setReviewList = () => {
    axios({
      url: "http://127.0.0.1:8000/movies/review/" + { id }.id.id + "/",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      setReviews(res.data);
    });
  };

  //리뷰 수정하기
  const editReview = (reviewuser, reviewid) => {
    axios({
      url: "http://127.0.0.1:8000/movies/review/" + { id }.id.id + "/",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(() => {
      if (localStorage.getItem("pk") == reviewuser) {
        axios({
          url: "http://127.0.0.1:8000/movies/review_edit/" + reviewid + "/",
          method: "put",
          data: {
            content: { comment }.comment,
            rank: { rank }.rank,
          },
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then(() => {
            setReviewList();
          })
          .catch((err) => {
            alert("평점은 1 ~ 10 사이의 수 이어야 합니다.");
          });
      }
    });
  };

  //리뷰 삭제하기
  const deleteReview = (reviewuser, reviewid) => {
    axios({
      url: "http://127.0.0.1:8000/movies/review/" + { id }.id.id + "/",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(() => {
      if (localStorage.getItem("pk") == reviewuser) {
        axios({
          url:
            "http://127.0.0.1:8000/movies/review_delete/" +
            { id }.id.id +
            "/" +
            reviewid +
            "/",
          method: "delete",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then(() => {
          setReviewList();
        });
      }
    });
  };

  return (
    <div className="review-list">
      <hr />
      <input
        type="text"
        placeholder="댓글 내용"
        onChange={(event) => setComment(event.target.value)}
        value={comment}
      />
      <input
        type="number"
        placeholder="평점 (1~10점)"
        onChange={(event) => setRank(event.target.value)}
        value={rank}
      />
      <button className="commentBtn" onClick={() => createReview()}>
        확인
      </button>
      <hr />
      {reviews.map((review) => {
        dupCheck.push(review.user);

        return (
          <div>
            <h2>Reviews</h2>
            {/* 공백 */} &nbsp;
            <table>
              <tr>
                <td>작성자</td>
                <td>내용</td>
                <td>평점(1~10)</td>
                <td>작성날짜</td>
              </tr>
              <tr>
                {/* <td>로그인한사람{localStorage.getItem("pk")}</td> */}
                <td>{review.user}번째 익명</td>
                <td>{review.content}</td>
                <td>{review.rank}</td>
                <td format="yyyy-MM-dd">{review.created_at}</td>
              </tr>
            </table>
            {localStorage.getItem("pk") == review.user ? (
              <div>
                <button
                  className="editBtn"
                  onClick={() => editReview(review.user, review.id)}
                >
                  수정하기
                </button>
                <button
                  className="deleteBtn"
                  onClick={() => {
                    deleteReview(review.user, review.id);
                  }}
                >
                  삭제하기
                </button>
              </div>
            ) : null}
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default Review;
