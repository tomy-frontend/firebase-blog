import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <article className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          <p>
            今はReactの学習中です。「吾輩は今日も縁側で昼寝をしながら、主人の苦々しい顔で論文を書いている様子を冷ややかに観察していた。書生は相変わらず無骨な様子で庭を掃いている。どうやら主人は近頃珍しく研究に没頭しているようだが、いかにも自惚れが強く見苦しい。その癖何も新しいことは書いていない。まったく人間というものは不可思議な生き物である。」「吾輩は今日も縁側で昼寝をしながら、主人の苦々しい顔で論文を書いている様子を冷ややかに観察していた。書生は相変わらず無骨な様子で庭を掃いている。どうやら主人は近頃珍しく研究に没頭しているようだが、いかにも自惚れが強く見苦しい。その癖何も新しいことは書いていない。まったく人間というものは不可思議な生き物である。」TypeScriptこそ至高
          </p>
        </div>
        <div className="nameAndDeleteButton">
          <h3>@tommy</h3>
          <button>削除</button>
        </div>
      </article>
    </div>
  );
};

export default Home;
