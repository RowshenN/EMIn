import React from "react";
import Header from "../components/Header";

import surat from "../images/NewImg.png";
import { useParams } from "react-router-dom";

const NewInner = () => {
  const { id } = useParams();
  console.log(id);
  // const [newsData, setNewsData] = useState();
  // async function getAllNews(params) {
  //   axiosInstance.get("/guest/news/getAll").then((res) => {
  //     setNewsData(res?.data);
  //   });
  // }
  // useEffect(() => {
  //   getAllNews();
  // }, []);
  return (
    <div className="w-full px-6 lg:w-[60%] mx-auto">
      <Header header={"News"} visible={true} pathname={"/news-list"} />

      <div className="w-full">
        <div className="flex items-center justify-start gap-4 text-white font-[outfit-light] text-[14px] mb-5">
          <p>11 март 2023</p>
          <p>12:50</p>
        </div>

        <h1 className="text-white font-[outfit-bold] text-[25px] lg:text-[36px] mb-[50px] ">
          Positive Technologies has developed and presented a competency map for
          an information security specialist
        </h1>

        <div>
          <img src={surat} alt="surat" />
        </div>

        <p className="text-white font-[outfit-light] text-[16px] my-[50px]">
          Lorem ipsum dolor sit amet, in eos melius bonorum molestiae, eos an
          deleniti constituam. Hell homero scriptorem usu. Et yauem soluta
          vulputate eam, vih ad probatus partiendo assueverit. Mei at sapientem
          eloyauentiam. In vih scribentur instructior. Volumus adipisci
          disputationi atnets, with error malorum ne. Delitsata ekhplitsari
          prodesset mel te, vivendum similiyaue scriptorem en us, usu aczomodare
          contentiones id. Sit zu region facilisi. Aeyaue graetso ne vih, tota
          latine constsettuer ea vel, sit aliyauip tratstatos ad. Adhutz
          voluptaria appellantur no mei, saperet voluptua ad duo. Nam ut yauem
          veniam homero. Dotsendi epicurei suavitate duo ex, zu pro ferri
          tratstatos. Usu tale nostrud molestiae an, et vim timeam persius
          democritum. His at laoreet tsorpora, duo admodum tsonseyauuntur at,
          yaui timeam aczusamus ne. Tsum eh vide elit, his an possim triple
          posidonium, vim eirmod yaualisyaue ne. Ea about the nonums of
          gloriatures. Ludus mucius epicuri ne eum, vim et justo docendi
          voluptaria. Ea yauando fierent propriae vim, te tsum soluta mucius
          volumus.
        </p>
      </div>
    </div>
  );
};

export default NewInner;
