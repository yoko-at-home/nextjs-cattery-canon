/* eslint-disable tailwindcss/no-custom-classname */
import { Logo } from "../Logo";

const data = [
  {
    title: "A",
    url: "/static/images/hexa/soa-chan.jpg",
  },
  {
    title: "B",
    url: "/static/images/hexa/ada.jpg",
  },
  {
    title: "C",
    url: "/static/images/hexa/red.jpg",
  },
];

export const GalleryHexagon = () => {
  return (
    <>
      <article title="lab">
        <div className="hidden justify-center mb-8 md:flex">
          <Logo />
        </div>
        <ul className="">
          {data.map((item) => {
            return (
              <div className="lab_item" key={item.title}>
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div
                      className="hexagon-in2"
                      style={{
                        backgroundImage: `url(${item.url})`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </article>

      <style jsx>
        {`
          #lab {
            width: 100%;
            overflow: hidden;
            position: relative;
            // margin: 0 auto;
            -webkit-transition: all ease 500ms;
            -moz-transition: all ease 500ms;
            -o-transition: all ease 500ms;
            -ms-transition: all ease 500ms;
            transition: all ease 500ms;
          }

          .lab_item {
            width: 200px;
            height: 230px;
            // margin-right: 7px;
            position: relative;
            display: inline-block;
          }

          .hexagon2 {
            position: absolute;
            width: 200px;
            height: 400px;
            top: -85px;
          }

          .hexagon {
            overflow: hidden;
            visibility: hidden;

            -webkit-transform: rotate(120deg);
            -moz-transform: rotate(120deg);
            -o-transform: rotate(120deg);
            -ms-transform: rotate(120deg);
            transform: rotate(120deg);
            cursor: pointer;
          }

          .hexagon-in1 {
            overflow: hidden;
            width: 100%;
            height: 100%;

            -webkit-transform: rotate(-60deg);
            -moz-transform: rotate(-60deg);
            -o-transform: rotate(-60deg);
            -ms-transform: rotate(-60deg);
            transform: rotate(-60deg);
          }

          .hexagon-in2 {
            -webkit-box-shadow: inset 0 0 0 200px rgba(127, 96, 0, 0.58);
            box-shadow: inset 0 0 0 200px rgba(127, 96, 0, 0.58);
            overflow: hidden;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: 50%;

            -webkit-background-size: 125%;
            -moz-background-size: 125%;
            background-size: 125%;
            visibility: visible;

            -webkit-transform: rotate(-60deg);
            -moz-transform: rotate(-60deg);
            -o-transform: rotate(-60deg);
            -ms-transform: rotate(-60deg);
            transform: rotate(-60deg);

            -webkit-transition: all 0.5s ease;
            -moz-transition: all 0.5s ease;
            -o-transition: all 0.5s ease;
            -ms-transition: all 0.5s ease;
            transition: all 0.5s ease;
          }

          .hexagon-in2:hover {
            -webkit-box-shadow: inset 0 0 0 0px rgba(22, 56, 09, 0.6);
            box-shadow: inset 0 0 0 0px rgba(22, 56, 09, 0.6);
          }

          .lab_item:nth-child(7n-2) {
            margin-left: 101px;
          }

          .lab_item:nth-child(n + 5) {
            margin-top: -55px;
          }

          @media (max-width: 1015px) {
            #lab {
              width: 100%;
            }
          }

          @media (max-width: 820px) {
            .lab_item:nth-child(5n-1) {
              margin-left: 102px;
            }

            .lab_item:nth-child(n + 4) {
              margin-top: -62px;
            }

            .lab_item:nth-child(7n-2) {
              margin-left: 0px;
            }

            .lab_item:nth-child(n + 5) {
              margin-top: -56px;
            }

            #lab article {
              width: 610px;
            }
          }

          @media (max-width: 640px) {
            #lab article {
              width: 405px;
            }

            .lab_item:nth-child(5n-1) {
              margin-left: 0px;
            }

            .lab_item:nth-child(3n) {
              margin-left: 102px;
            }

            .lab_item:nth-child(n + 3) {
              margin-top: -56px;
            }
          }

          @media (max-width: 450px) {
            #lab article {
              width: 300px;
            }

            .lab_item:nth-child(3n) {
              margin-left: 0px;
            }

            .lab_item:nth-child(2n) {
              margin-left: 102px;
            }

            .lab_item:nth-child(n + 2) {
              margin-top: -56px;
            }
          }
        `}
      </style>
    </>
  );
};
