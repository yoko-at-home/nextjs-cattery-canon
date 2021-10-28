import { siteMetadata } from "../data/siteMetadata";

export const Logo = () => {
  return (
    <div className="m-15">
      <div className="border balloonoya">
        {siteMetadata.title}
        <span className="balloon">🐈 Meow 🐈</span>
      </div>
      <style jsx>{`
        .border {
          padding: 5px 8px;
          box-shadow: 10px 10px 11px #aaaaaa, -10px -10px 11px #ffffff;
          color: #aaaaaa;
          background: linear-gradient(75deg, rgba(2, 9, 66, 1) 4%, rgba(6, 85, 92, 1) 76%);
        }
        .balloonoya {
          position: relative; /* 指定した分だけ相対的に移動 */
        }
        .balloonoya:hover .balloon {
          display: inline; /* インライン要素として表示 */
        }
        .balloon {
          position: absolute; /* 親要素を基準 */
          display: none; /* 要素を非表示 */
          padding: 8px 10px; /* テキストの前後の余白 */
          background-color: #ffffff; /* 背景色（透明度） */
          width: 90px; /* 吹き出し全体の幅 */
          right: -25%; /* 表示位置 */
          top: -25%;
          font-size: 70%; /* 文字サイズ */
          color: rgb(2, 9, 66);
          box-shadow: 5px 5px 11px rgb(109, 112, 122), -5px -5px 11px rgb(109, 112, 122);
        }
      `}</style>
    </div>
  );
};
