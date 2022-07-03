import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log("location", location);
  const { search } = useLocation();
  console.log("search", search);
  const query = new URLSearchParams(search);
  // 引数をクエリ文字列に変換し新しく生成
  console.log("query", query);

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};
