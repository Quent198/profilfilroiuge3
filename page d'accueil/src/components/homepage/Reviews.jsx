import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import user1 from "../../assets/Reviews/user4.jpg";
import user2 from "../../assets/Reviews/user1.jpg";
import user3 from "../../assets/Reviews/user7.webp";

export default function Reviews() {
  const reviews = [
    {
      text: "Missa JarJar Binks",
      user: {
        username: "Jarjar Binks",
        avatarUrl: user1,
        role: "Gungan",
      },
    },
    {
      text: "Est-ce que tu connais l’histoire tragique de Dark Plagueis le Sage ?",
      user: {
        username: "Sheev Palpatine",
        avatarUrl: user3,
        role: "Chancelier Suprême",
      },
    },
    {
      text: "Je suis ton père.",
      user: {
        username: "Dark Vador",
        avatarUrl: user2,
        role: "Seigneur Sith",
      },
    },
  ];
  return (
    <div className="flex flex-col p-20 bg-white items-center justify-center">
      <h1 className="self-start text-primary text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur. Euismod morbi faucibus ante nis.
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {reviews.map((review) => {
          return (
            <div
              key={review.user.username}
              className="card w-96 bg-base-100 shadow-xl m-10 hover:cursor-pointer"
            >
              <div className="bg-white text-sm flex flex-col p-5 justify-between h-full">
                <p>
                  <FontAwesomeIcon icon={faQuoteLeft} className="p-2" />
                  {review.text}
                  <FontAwesomeIcon icon={faQuoteRight} className="p-2" />
                </p>
                <div>
                  <div className="mt-3 flex items-center justify-center">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={review.user.avatarUrl} />
                      </div>
                    </div>
                    <div className="flex flex-col mx-3 items-center justify-center">
                      <p className=" text-primary font-bold">
                        {review.user.username}
                      </p>
                      <p>{review.user.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
