import actu1 from "../../assets/Reviews/actu1.jpg";
import actu2 from "../../assets/Reviews/actu2.webp";
import actu3 from "../../assets/Reviews/actu3.webp";
import actu4 from "../../assets/Reviews/actu4.jpg";
import actu5 from "../../assets/Reviews/actu5.webp";
import actu6 from "../../assets/Reviews/actu6.webp";

import user1 from "../../assets/Reviews/user1.jpg";
import user2 from "../../assets/Reviews/user2.jpg";
import user3 from "../../assets/Reviews/user3.webp";
import user4 from "../../assets/Reviews/user4.jpg";
import user5 from "../../assets/Reviews/user5.png";
import user6 from "../../assets/Reviews/user6.webp";

export default function LastNews() {
  const Articles = [
    {
      imgUrl: actu1,
      category: "Côté obscur",
      date: "25 mai 2024",
      title: "L'Ordre 66",
      description:
        "Pour prouver à son maître sa totale loyauté en sa nouvelle allégeance, il partit au Temple Jedi pour tuer tous les Jedi et apprentis présents.",
      user: {
        avatarUrl: user1,
        username: "Dark Vador",
      },
    },
    {
      imgUrl: actu2,
      category: "Naboo",
      date: "25 mai 2024",
      title: "Invasion de Naboo",
      description:
        "Cependant, quand Sidious apprit l'identité des médiateurs, il ordonna aux Neimoidiens de commencer l'invasion de Naboo sans tarder et de se débarrasser des deux Jedi. ",
      user: {
        avatarUrl: user2,
        username: "Dark Sidious",
      },
    },
    {
      imgUrl: actu3,
      category: "Naboo",
      date: "25 mai 2024",
      title: "Crise de Naboo",
      description:
        "Ainsi, alors que la Bataille de Naboo venait de commencer, Dark Maul révéla son funeste et démoniaque visage à Qui-Gon Jinn et Obi-Wan Kenobi.",
      user: {
        avatarUrl: user3,
        username: "Dark Maul",
      },
    },
    {
      imgUrl: actu4,
      category: "Naboo",
      date: "25 mai 2024",
      title: "Bataille de Naboo",
      description:
        "Après la bataille de Naboo, Jar Jar Binks fut porté par un élan populaire jusqu'au poste de Représentant Sénatorial associé au Sénat Galactique.",
      user: {
        avatarUrl: user4,
        username: "Jarjar Binks",
      },
    },
    {
      imgUrl: actu5,
      category: "Naboo",
      date: "25 mai 2024",
      title: "Échec des négociations",
      description:
        "Qui-Gon Jinn et son padawan Obi-Wan furent envoyés sur Naboo par le Chancelier Finis Valorum en tant que médiateurs afin de résoudre cette crise par des voies diplomatiques.",
      user: {
        avatarUrl: user5,
        username: "Qui-Gon Jinn",
      },
    },
    {
      imgUrl: actu6,
      category: "Sith",
      date: "25 mai 2024",
      title: "Seigneur Noir des Sith",
      description:
        "Durant sa vie, Plagueis tenta de percer le secret de l'immortalité à de nombreuses reprises notamment en tentant de créer une dyade de Force avec son apprenti, Dark Sidious.",
      user: {
        avatarUrl: user6,
        username: "Dark Pleguis",
      },
    },
  ];

  return (
    <div className="bg-secondary-bg w-screen h-full py-10 px-10">
      <h1 className="uppercase font-bold text-primary text-4xl phone:text-5xl">
        Dernières actualités
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {Articles.map((article) => {
          return (
            <div
              key={article.title}
              className="card w-96 bg-base-100 shadow-xl m-10 hover:cursor-pointer"
            >
              <figure className="h-[200px] w-auto">
                <img src={article.imgUrl} />
              </figure>
              <div className="bg-white text-sm flex flex-col p-5 justify-between">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-primary">{article.category}</p>
                  <p className="font-medium">{article.date}</p>
                </div>
                <div className="m-3 font-bold">{article.title}</div>
                <div>{article.description}</div>
                <div className="mt-3 flex items-center justify-center">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={article.user.avatarUrl} />
                    </div>
                  </div>
                  <p className="mx-3 text-primary font-bold">
                    {article.user.username}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
