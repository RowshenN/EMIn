import React, { useContext } from "react";

import Navigation2 from "../components/navbars/Navigation2";
import AreYouReady from "../components/AreYouReady";
import { SebedimContext } from "../context/Context";

import surat from "../images/turkmenistan.png";
import bulut_top from "../images/Bulut yokarky.png";
import bulut_down from "../images/asaky bulut.png";
import history_line from "../images/history-line.svg";
import tradition_line from "../images/tradition-line.svg";
import history_images from "../images/history images.png";
import culture_main from "../images/culture main.png";
// import culture_text from "../images/culture-text.svg";
import tradition_images from "../images/tradition_images.png";
// import tradition_text from "../images/tradition-text.svg";
// import meals_text from "../images/meals-text.svg";
import meals_bottom from "../images/meal-asaky-bulut.png";
import meals_main from "../images/meal_main.png";

const Turkmenistan = () => {
  const { dil } = useContext(SebedimContext);
  return (
    <>
      <div className="w-full">
        <Navigation2 />

        <div className="w-full -z-20 relative">
          <div>
            <img
              src={surat}
              alt="surat"
              className="w-full h-[100vh] object-cover"
            />
          </div>
          <img
            className="w-full absolute bottom-[-10px] h-[210px] object-cover"
            src={bulut_top}
            alt="cloud"
          />
        </div>

        {/* history */}
        <div className="w-[90%] mb-[69px] pt-[40px] flex lg:flex-row sm:flex-col items-center justify-center gap-[100px] mx-auto ">
          <div className="sm:w-full lg:w-[50%] ">
            <div className="mb-10 w-full flex flex-col sm:items-center md:items-baseline sm:justify-center md:justify-start">
              <p className="text-[#009833] sm:text-[26px] md:text-[46px] font-[poppins-semibold] ">
                {dil === "tk"
                  ? "Taryh"
                  : dil === "ru"
                  ? "История"
                  : dil === "tr"
                  ? "Tarih"
                  : "History"}
              </p>
              <img
                src={history_line}
                alt="history"
                className="sm:w-[40%] md:w-fit sm:mt-[-5px] md:mt-[-10px] object-cover"
              />
            </div>

            <p className="text-[#878787] lg:text-left sm:text-center sm:text-[12px] md:text-[16px] mb-[13px] font-[poppins-medium] ">
              {dil === "tk"
                ? "Türkmenistan özboluşly we ajaýyp ýurt. Şäherleriň gözelligi, ýylylygy, arassalygy we amatlylygy, şeýle hem ýaşaýjylaryň çyn ýürekden myhmansöýerligi bilen haýran galdyrýar. Yöne esasy zat, bu ýerde gadymy däp-dessurlaryň, joşgunly döwrebaplygyň we üstünlikli geljege bolan islegleriň düýbünden tebigy birleşmegi.Türkmenler ençeme asyr bäri ýolbaşçylary hormatlaýarlar, maşgala gymmatlyklaryny we ýaşululara hormat goýýarlar, tebigata ideg edýärler, taryhy ýadygärliklere seresaplylyk bilen seredýärler, ýakymly nahar bişirýärler, Ahal-Teke atlaryna buýsanýarlar we owadan haly dokaýarlar.Şol bir wagtyň özünde ýurt döwri yzarlaýar. BMG, GDA, UNESKO, BSG we beýlekilerde esasy global guramalara agza ýa-da synçy ýurt bolmak bilen sebit we global syýasatda möhüm rol oýnaýar. Halkara bazarynda Türkmenistan tebigy gaz we nebit bilen üpjün ediji, pagta öndüriji we miwe eksport edýän ýurtdyr. Döwlet ekologiýa, bilime, saglygy goraýyşa we innowasiýalaryň ornaşdyrylmagyna uly ähmiýet berýär - muňa mysal hökmünde durmuş, işjeň iş, ösüş we gülläp ösmek üçin iň täze tehnologiýalary özleşdiren Arkadag şäheri açyldy."
                : dil === "ru"
                ? "Туркменистан – страна самобытная и удивительная. Она поражает красотой, теплотой, чистотой и удобством городов, а также искренним гостеприимством жителей. Но главное – здесь совершенно естественно сочетаются древние традиции, живая современность и устремленность к успешному будущему.На протяжении вот уже многих столетий туркмены чтут лидеров, хранят ценности семьи и уважения к старшим, заботятся о природе, бережно относятся к памятникам истории, вкусно готовят, гордятся ахалтекинскими скакунами и ткут прекрасные ковры.И в то же время страна идет в ногу со временем. Она играет заметную роль в региональной и мировой политике, являясь членом или страной-наблюдателем в крупнейших глобальных организациях – ООН, СНГ, ЮНЕСКО, ВОЗ и других. На международном рынке Туркменистан – крупный поставщик природного газа и нефти, важный производитель хлопка и экспортер фруктов. Огромное значение   государство уделяет экологии, образованию, здравоохранению и внедрению инноваций – примером тому служит недавно открывшийся «умный» город Аркадаг, вобравший в себя новейшие технологии для жизни, активной деятельности, развития и процветания."
                : dil === "tr"
                ? "Türkmenistan özgün ve şaşırtıcı bir ülkedir. Şehirlerin güzelliği, sıcaklığı, temizliği ve rahatlığı ile sakinlerin samimi misafirperverliği ile dikkat çekiyor. Ancak asıl mesele, eski geleneklerin, yaşayan modernliğin ve başarılı bir geleceğe yönelik özlemin burada tamamen doğal bir şekilde birleştirilmesidir. Yüzyıllardır Türkmenler liderleri onurlandırıyor, aile değerlerini koruyor ve yaşlılara saygı duyuyor, doğaya özen gösteriyor, tarih anıtlarına özen gösteriyor, lezzetli yemek pişiriyor, Akhal-Teke atlarıyla gurur duyuyor ve güzel halılar örüyorlar. Aynı zamanda ülke de zamana ayak uyduruyor. BM, BDT, UNESCO, DSÖ ve diğerleri gibi en büyük küresel kuruluşlara üye veya gözlemci ülke olarak bölgesel ve dünya siyasetinde önemli bir rol oynamaktadır. Uluslararası pazarda Türkmenistan, önemli bir doğal gaz ve petrol tedarikçisi, önemli bir pamuk üreticisi ve meyve ihracatçısıdır. Devlet ekolojiye, eğitime, sağlık hizmetlerine ve yeniliklerin uygulanmasına büyük önem veriyor – bunun bir örneği, yaşam, aktif faaliyet, gelişme ve refah için en son teknolojileri benimseyen yeni açılan «akıllı» Arkadag şehridir."
                : 'Turkmenistan is an original and amazing country. It impresses with the beauty, warmth, cleanliness and convenience of the cities, as well as the sincere hospitality of the residents. But the main thing is that ancient traditions, vibrant modernity and a commitment to a successful future are naturally combined here. For many centuries, Turkmens have been honoring leaders, preserving the values of family and respect for elders, taking care of nature, caring for historical monuments, delicious food, proud of Akhal-Teke horses and weaving beautiful carpets. At the same time, the country is moving with the times. It plays a significant role in regional and global politics, being a member or observer country in the largest global organizations – the UN, the CIS, UNESCO, WHO and others. Turkmenistan is a major supplier of natural gas and oil on the international market, an important cotton producer and fruit exporter. The government attaches great importance to the environment, education, healthcare, and innovation, as exemplified by the recently opened "smart" city of Arkadag, which has incorporated the latest technologies for life, activism, development, and prosperity.'}
            </p>
          </div>

          <div className="sm:w-[90%] xs:w-[70%] lg:w-[50%] ">
            <img src={history_images} className="object-cover" alt="images" />
          </div>
        </div>
      </div>

      {/* culture */}
      <div className="w-full flex items-center justify-center relative h-[100vh]">
        <img
          src={bulut_down}
          alt="cloud-down"
          className="absolute object-cover w-full !h-[170px] sm:top-[-10px] lg:top-0 left-0 "
        />

        <img
          src={culture_main}
          alt="surat"
          className="w-full h-[100vh] object-cover"
        />

        <div className="sm:w-[90%]  lg:w-[66%] absolute  mx-auto ">
          <div className="w-full flex items-center justify-center">
            <p className="text-white sm:text-[26px] sm:mb-5 md:mb-0 md:text-[84px] font-[poppins-semibold] ">
              {dil === "tk"
                ? "Medeniýet"
                : dil === "ru"
                ? "Культура"
                : dil === "tr"
                ? "Kültür"
                : "Culture"}
            </p>
          </div>

          <div className="w-full text-left lg:py-[25px] lg:px-[35px] sm:text-[12px] md:text-[16px] text-white ">
            <p className="shadow-2xl">
              {dil === "tk"
                ? "Türkmenistanyň medeniýet ulgamyny ösdürmek, türkmen halkynyň ruhy gymmatlyklaryna esaslanýan döwlet taglymatyny kemala getirmek hormatly Prezidentimiz Serdar Berdimuhamedowyň alyp barýan köpugurly syýasatynyň ileri tutulýan ugurlarynyň biridir. Özboluşly medeni mirasymyz halkymyzyň aýawly saklap, nesilden-nesle geçirip gelýän gaýtalanmajak maddy we ruhy gymmatlyklarynyň bitewi ulgamydyr. Milli medeni mirasymyzy öwrenmek, gorap saklamak, mundan beýläk-de baýlaşdyrmak döwlet Baştutanymyzyň üns merkezinde durýar. Bu ugurdaky işler häzirki wagtda üstünlikli dowam etdirilip, medeniýet we sungat işgärleriniň, köpçülikleýin habar beriş serişdeleriniň işine aýratyn ähmiýet berilýär. Döredijilik ugry Arkadag Serdarly bagtyýar ýaşlar ýylynda guralýan çäreleriň hem aýrylmaz bölegidir. Medeniýet, sungat ussatlarynyň, köpçülikleýin habar beriş serişdeleriniň işgärleriniň alyp barýan işleri Watanymyzyň ýeten sepgitlerini giňden wagyz etmäge, olaryň ähmiýetini açyp görkezmäge, ykdysadyýetiň ähli pudaklarynda amala aşyrylýan özgertmelere we durmuş taýdan ösüşe itergi bermäge gönükdirilendir."
                : dil === "ru"
                ? "Наше уникальное культурное наследие представляет собой единую систему уникальных материальных и духовных ценностей, которые наш народ бережно хранил и передавал из поколения в поколение. Изучение, сохранение и дальнейшее обогащение нашего национального культурного наследия находятся в центре внимания главы государства. Работа в этом направлении в настоящее время успешно продолжается, особое внимание уделяется работе деятелей культуры и искусства, средств массовой информации. Творческое направление также является неотъемлемой частью мероприятий, организуемых в рамках Года молодежи имени Аркадага Сердарлы. Деятельность деятелей культуры, искусства и средств массовой информации направлена на широкую пропаганду достижений нашей Родины, освещение их значимости, придание импульса реформам и социальному развитию всех отраслей экономики."
                : dil === "tr"
                ? "Eşsiz kültürel mirasımız, halkımızın nesilden nesile özenle sakladığı ve aktardığı tek bir benzersiz maddi ve manevi değerler sistemidir. Ulusal kültürel mirasımızın incelenmesi, korunması ve daha da zenginleştirilmesi devlet başkanının odak noktasıdır. Bu yöndeki çalışmalar şu anda başarılı bir şekilde devam etmekte olup, kültür ve sanat figürlerinin ve medyanın çalışmalarına özel önem verilmektedir. Yaratıcı yön, Arkadağ Serdarlı Gençlik Yılı kapsamında düzenlenen etkinliklerin de ayrılmaz bir parçasıdır. Kültür, sanat ve medya figürlerinin faaliyetleri, Anavatanımızın başarılarını geniş çapta yaymayı, önemini vurgulamayı, ekonominin tüm sektörlerinin reformlarına ve sosyal gelişimine ivme kazandırmayı amaçlamaktadır."
                : "Our unique cultural heritage is a unified system of unique material and spiritual values that our people have carefully preserved and passed on from generation to generation. The study, preservation and further enrichment of our national cultural heritage are in the focus of the Head of State's attention. Work in this area is currently successfully continuing, with special attention being paid to the work of cultural and artistic figures and the media. The creative direction is also an integral part of the events organized within the framework of the Arkadag Serdarly Youth Year. The activities of cultural, artistic and mass media figures are aimed at widely promoting the achievements of our Motherland, highlighting their significance, and giving impetus to reforms and social development in all sectors of the economy."}
            </p>
          </div>
        </div>
        <img
          src={bulut_top}
          alt="cloud-top"
          className="absolute object-cover sm:bottom-[-10px] lg:bottom-0 left-0 !h-[200px] w-full"
        />
      </div>

      {/* tradition */}
      <div className="w-[90%] mb-[69px] pt-[40px] flex lg:flex-row sm:flex-col items-center justify-center gap-[100px] mx-auto ">
        <div className="sm:w-full lg:w-[50%]">
          <div className="mb-10 w-full flex sm:items-center md:items-baseline sm:justify-center md:justify-start flex-col ">
            <p className="text-[#009833] sm:text-[26px] md:text-[46px] font-[poppins-semibold] ">
              {dil === "tk"
                ? "Däp-dessur"
                : dil === "ru"
                ? "Традиция"
                : dil === "tr"
                ? "Gelenek"
                : "Tradition"}
            </p>
            <img
              src={tradition_line}
              alt="history"
              className="sm:w-[40%] md:w-fit object-cover"
            />
          </div>

          <p className="text-[#878787] lg:text-left sm:text-center sm:text-[12px] md:text-[16px] mb-[13px] font-[poppins-medium] ">
            {dil === "tk"
              ? " Halkymyzyň milli däp-dessurlarynyň iň ajaýyplarynyň biri-de myhmansöýüjilikdir. Türkmen myhmanyny diňe bir öýüniň däl, eýsem kalbynyň törüne hem geçirýär. Halkymyz öýüne gelen adama diňe bir myhmançylyk hormatyny etmän, oňa hossarlyk hormatyny hem saklaýar. Nusgawy edebiýatymyzda, halk döredijiliginde bu däp kämillik derejesine ýetirilipdir. Olarda türkmenleriň myhman kabul edişi, myhmana goýulýan hormat, edilýän hezzet, sarpa giňden teswirlenýär. Belli şahsyýetlerimiziň nesihatlarynda hem myhmansöýerlik meselesine aýratyn orun berilýär. Türkmen halk döredijiliginde “Myhman ataňdan uly”, “Myhmanyň öňünde aş goý, iki elini boş goý”, “Myhman rysky bilen geler” diýen ýaly parasatly jümleler bar.Milli mirasymyzyň naýbaşy eserleri bolan “Gorkut ata”, “Görogly” şadessanlarynda bu tema giň orun berilýär. “Gorkut ata” şadessanynda “Myhman gelmedik öýüň ýykylany ýeg” diýilýär. “Görogly”şadessanynda myhmansöýüjilik däpleri şahyrana setirlerde çeper beýan edilýär. Türkmene mahsys bu ajaýyp häsiýet bilen bagly däp-dessurlar anyk suratlandyrylýar. Myhmany mal soýup, söwüşli garşylamak, olary sowgat-serpaýly ugratmak türkmenlerde ynsan mertebesini belende göterýän däpleriň biri hasaplanýar.Myhmana hormat etmek atadan ogla sargyt edilýär. Eger-de myhman atly bolsa, atyny tutup garşylamak we atynyň otuna-suwuna seretmek, myhmanyň eline suw akytmak ýaly dessurlaryň beýanyny şadessanyň şahalarynda görmek bolýar. Muňa “Göroglynyň döreýişi” şahasyndaky Jygalybegiň ýeke sygryny soýup, galandarlara hezzet etmegini mysal getirmek bolar.Nusgawy edebiýatymyzda myhmanparazlyk temasynyň giňden işlenilmegi tötänlik däl, bu kanunalaýyklykdyr. Pederlerimiz ençeme menzil ýol söküp, biri-biri bilen didarlaşmak üçin myhmançylykda bolupdyrlar. Uzak ýoldan ýadap gelen myhmanlary hormat bilen kabul edip, olaryň dem-dynç almaklary, özlerini rahat duýmaklary üçin hemme şertler döredilipdir.Milli däp-dessurlarymyzyň dabaralanýan döwründe halkymyzyň asyly däpleriniň biri bolan myhman kabul etmek we myhmançylykda bolmak däpleri dowam etdirilýär. Halkymyzyň arasynda bu däp bilen baglanşykly dürli yrymlar häzirki güne çenli saklanyp, il arasynda ýerne ýetirilýär. Ata-babalarymyz myhmana çaý-çörek äberilende, çäýnekden ilki guýlan käsäni özüne, ikinjisini muhmana uzadypdyrlar. Bu myhmanyň arkaýyn iýip-içmegi üçin edilipdir. Türkmençilikde gelen myhmanyň özi dil ýarmasa, gelenine üç gün geçýänçä, onuň näme üçin gelendigi soralmandyr. Şeýle hem myhman ugradylanda, onuň ýany bilen ýedi ýa dokuz ädime çenli bile ýöräpdirler. Bu yrym myhmanyň barjak ýerine sag-aman barmagy üçin ýagşy niýet bilen edilipdir."
              : dil === "ru"
              ? "Одна из самых красивых национальных традиций нашего народа — гостеприимство. Он принимает туркменского гостя не только в свой дом, но и в глубины своей души. Наши люди не только оказывают гостеприимство тем, кто приходит к ним в дом, но и оказывают им уважение и покровительство. Эта традиция доведена до совершенства в нашей классической литературе и фольклоре. В них подробно описывается туркменский способ приветствия гостей, уважение, вежливость и почтение, оказываемые гостям. Советы наших известных личностей также уделяют особое внимание вопросу гостеприимства. В туркменском фольклоре сохранились мудрые поговорки: «Гость старше отца», «Поставь еду перед гостем, оставь обе руки свободными», «Гость придет с едой».Этой теме отведено широкое место в эпосах «Горкут Ата» и «Героглы», которые являются шедеврами нашего национального наследия. В эпической поэме «Горкут Ата» говорится: «Дом, куда не приходил гость, разрушается». В эпической поэме «Героглы» традиция гостеприимства художественно выражена в поэтических строках. Четко описаны традиции, связанные с этой уникальной туркменской чертой. Встреча гостей зарезанными животными, проводы их с подарками и угощениями считаются у туркмен традицией, возвышающей человеческое достоинство. Уважение к гостям передается от отца к сыну. Если гость — всадник, то в стихах эпоса описываются обычаи, такие как приветствие гостя, при котором его держат на руках, уход за его гривой и хвостом, а также поливание водой руки гостя. Примером этого является история Джигалыбека в «Рождении Гёроглы», который зарезал свою единственную корову и накормил остальных.Широкое развитие темы гостеприимства в нашей классической литературе — не случайность, а закономерность. Наши предки путешествовали по многим местам и останавливались в гостиницах, чтобы встретиться друг с другом. Гостей, приехавших из дальнего путешествия, встречают с уважением и создают все условия для того, чтобы они могли отдохнуть и почувствовать себя комфортно.Во время празднования наших национальных традиций продолжается одна из важнейших традиций нашего народа – традиция принимать и быть гостеприимным. Различные суеверия, связанные с этой традицией, сохранились в нашем народе и по сей день и передаются из поколения в поколение. Когда наши предки подавали гостю чай и хлеб, они передавали первую чашку, налитую из чайника, себе, а вторую — гостю. Это было сделано для того, чтобы гость мог спокойно есть и пить. В туркменской культуре, если гость сам не говорил бегло, его не спрашивали, зачем он приехал, в течение трех дней после прибытия. Кроме того, когда гостя провожали, они проходили с ним семь или девять шагов. Это суеверие делалось с добрыми намерениями, чтобы обеспечить гостю благополучное прибытие к месту назначения."
              : dil === "tr"
              ? "Halkımızın en güzel ulusal geleneklerinden biri misafirperverliktir. Türkmen konuğunu sadece evine değil, ruhunun derinliklerine de kabul ediyor. Halkımız sadece evlerine gelenlere misafirperverlik sağlamakla kalmıyor, aynı zamanda onlara saygı ve himaye de veriyorlar. Bu gelenek klasik edebiyatımızda ve folklorumuzda mükemmelleştirilmiştir. Türkmenlerin konukları karşılama şeklini, konuklara gösterilen saygıyı, nezaketi ve saygıyı detaylandırıyorlar. Ünlü şahsiyetlerimizin tavsiyeleri de misafirperverlik konusuna özel önem vermektedir. Türkmen folklorunda «Misafir babadan daha yaşlı», «Konuğun önüne yemek koy, iki elini de serbest bırak», «Misafir yemekle gelecek» gibi bilge sözler korunmuştur. Bu temaya, ulusal mirasımızın şaheserleri olan «Gorkut Ata» ve «Gerogly» destanlarında geniş bir yer verilmiştir. Destansı şiir 'Gorkut Ata«, »Konuğun gelmediği ev yıkılıyor' der. Destansı şiir 'Herogly' de misafirperverlik geleneği şiirsel çizgilerle sanatsal olarak ifade edilir. Bu eşsiz Türkmen özelliğiyle bağlantılı gelenekler açıkça tanımlanmıştır. Misafirlerin katledilen hayvanlarla buluşması, onlara hediye ve ikramlarla sunulması Türkmenler arasında insan onurunu yükselten bir gelenek olarak kabul edilir. Konuklara saygı babadan oğula aktarılır. Konuk bir biniciyse, destanın ayetleri, konuğu kucağında tutarak selamlamak, yelesine ve kuyruğuna bakmak ve konuğun eline su dökmek gibi gelenekleri anlatır. Bunun bir örneği, tek ineğini katleten ve diğerlerini besleyen Gerogla'nın Doğumu'ndaki Jigalybek'in hikayesidir. Klasik edebiyatımızda misafirperverlik temasının geniş gelişimi bir tesadüf değil, bir düzenliliktir. Atalarımız birçok yere seyahat ettiler ve birbirleriyle tanışmak için hanlarda kaldılar. Uzun bir yolculuktan gelen konuklar saygıyla karşılanır ve dinlenebilmeleri ve kendilerini rahat hissetmeleri için tüm koşulları yaratır. Milli geleneklerimizin kutlanması sırasında halkımızın en önemli geleneklerinden biri olan kabul etme ve misafirperver olma geleneği devam etmektedir. Bu geleneğe bağlı çeşitli batıl inançlar halkımızda bugüne kadar korunmakta ve nesilden nesile aktarılmaktadır. Atalarımız konuğa çay ve ekmek servis edince çaydanlıktan dökülen ilk bardağı kendilerine, ikincisini konuğa verirlerdi. Bu, konuğun huzur içinde yiyip içebilmesi için yapıldı. Türkmen kültüründe, konuğun kendisi akıcı konuşmadıysa, geldikten sonraki üç gün içinde neden geldiği sorulmadı. Ayrıca konuğa eşlik edildiklerinde onunla yedi ya da dokuz adım yürüdüler. Bu batıl inanç, konuğun gideceği yere güvenli bir şekilde varmasını sağlamak için iyi niyetle yapıldı."
              : "One of the most beautiful national traditions of our people is hospitality. He welcomes a Turkmen guest not only into his home, but also into the depths of his soul. Our people not only extend hospitality to those who come to their homes, but also show them respect and patronage. This tradition has been perfected in our classical literature and folklore. They describe in detail the Turkmen way of greeting guests, the respect, courtesy and reverence shown to guests. The councils of our famous personalities also pay special attention to the issue of hospitality. Wise sayings have been preserved in Turkmen folklore: 'The guest is older than the father', 'Put the food in front of the guest, leave both hands free', 'The guest will come with food'. This theme has a wide place in the epics 'Gorkut Ata' and 'Gerogly', which are masterpieces of our national heritage. The epic poem 'Gorkut Ata' says: 'A house where no guest came is being destroyed.' In the epic poem 'Gerogly', the tradition of hospitality is artistically expressed in poetic lines. The traditions associated with this unique Turkmen trait are clearly described. Welcoming guests with slaughtered animals and seeing them off with gifts and treats is considered a tradition among Turkmens that elevates human dignity. Respect for the guests is passed down from father to son. If the guest is a horseman, then the verses of the epic describe customs such as greeting the guest by holding him in his arms, caring for his mane and tail, and pouring water on the guest's hand. An example of this is the story of Dzhigalybek in The Birth of Gerogla, who slaughtered his only cow and fed the others. The widespread development of the theme of hospitality in our classical literature is not an accident, but a pattern. Our ancestors traveled to many places and stayed in hotels to meet each other. Guests who come from a long trip are greeted with respect and all conditions are created so that they can relax and feel comfortable. During the celebration of our national traditions, one of the most important traditions of our people continues – the tradition of receiving and being hospitable. Various superstitions related to this tradition have been preserved in our people to this day and are passed down from generation to generation. When our ancestors served tea and bread to a guest, they passed the first cup, poured from the kettle, to themselves, and the second to the guest. This was done so that the guest could eat and drink in peace. In Turkmen culture, if a guest did not speak fluently himself, he was not asked why he had come for three days after arrival. In addition, when the guest was escorted, they walked with him seven or nine steps. This superstition was done with good intentions to ensure that the guest arrived safely at their destination."}
          </p>
        </div>

        <div className="sm:w-[90%] xs:w-[70%] lg:w-[50%] ">
          <img src={tradition_images} alt="images" className="object-cover" />
        </div>
      </div>

      {/* meals */}
      <div className="mb-[100px] w-full flex items-center justify-center relative h-[100vh]">
        <img
          src={bulut_down}
          alt="cloud-down"
          className="absolute w-full h-fit sm:top-[-10px] lg:top-[-70px] object-cover left-0 "
        />
        <img
          src={meals_main}
          alt="surat"
          className="w-full h-[100vh] object-cover"
        />
        <div className="sm:w-[90%] lg:w-[66%] absolute mx-auto ">
          <div className="w-full flex items-center justify-center">
            <p className="text-white sm:mb-5 md:mb-0 sm:text-[26px] md:text-[84px] font-[semibold] ">
              {dil === "tk"
                ? "Naharlar"
                : dil === "ru"
                ? "Еда"
                : dil === "tr"
                ? "Yemekler"
                : "Meals"}
            </p>
          </div>

          <div className="w-full sm:mt-0 md:mt-[-25px] -z-10 text-left lg:py-[20px] lg:px-[35px] sm:text-[12px] md:text-[16px] text-white">
            <p>
              {dil === "tk"
                ? "Türkmen halkymyzyň milli tagamlary, beýleki halklaryň naz-nygmatlary ýaly, öz gözbaşyny gadymy döwürlerden alyp gaýdýar, dürli-dürliligi we özboluşlulygy bilen tapawutlanýar. Biziň günlerimize ýetip gelen gadymy rowaýatlarda türkmen şalarynyň, harby serkerdeleriň bereketli saçaklaryň başynda öz ýeňişlerini belleýişleri, daşary ýurtly ilçileriň desterhanlardaky azyk önümleriniň köplügine haýran galyşlary, olaryň ähli adamlary sahylyk bilen tagam datmaga çagyryşlary hakynda örän köp aýdylýar. Adatça, üstünlik bilen tamamlanan möhüm işler, halk baýramçylygynyň dessurlary, maşgalanyň şanly wakalary we dabaralary hem saçak başynda giňden bellenilýär. Gahryman Arkadagymyzyň “Bereketli türkmen saçagy” atly kitaby türkmen aşhanasynyň muşdaklarynyň iň söýgüli eserleriniň hatarynda durýar. Mälim bolşy ýaly, türkmeniň datly tagamlary taryhyny irki döwürlerden alyp gaýdýar, olar uzak ýyllaryň dowamynda has-da kämilleşdirilip, adamyň sagdynlygyna, iýmit siňdirijiligine, ýokumlylyga, ýakymlylyga, süýjülige gönükdirilendir. Türkmen halkymyzyň milli tagamlary, beýleki halklaryň naz-nygmatlary ýaly, öz gözbaşyny gadymy döwürlerden alyp gaýdýar, dürli-dürliligi we özboluşlulygy bilen tapawutlanýar.Dograma – munuň özi türkmen halkynyň däp bolan ýörgünli milli naharydyr. Onuň ady hem ,,dogramak” diýen sözden gelip çykypdyr.    Türkmen milli tagamy bolan ,,Tamdyrlama” maşgalanyň iň gowy görýän nahary bolup, ol dost-ýarlar, myhman gelende ýa-da toý-baýramlarda taýýarlanylýar.  Elleri tagamly ene-mamalarymyz geçmişde däneli-kösükli ekinlerden ençeme milli tagamlary taýýarlamak bilen, olary beýik sungat derejesine ýetiripdirler. Bular barada türkmen halkynyň Milli Lideri Gahryman Arkadagymyzyň «Bereketli türkmen saçagy» atly kitabynda giňişleýin gürrüň edilýär. Milli tagamlarymyz halkymyzyň myhmansöýerliginiň özboluşly güwäsidir."
                : dil === "ru"
                ? "Национальные блюда туркменского народа, как и деликатесы других народов, берут свое начало в глубокой древности и отличаются разнообразием и самобытностью. Древние легенды, дошедшие до наших дней, повествуют о том, как туркменские шахи и полководцы праздновали свои победы за роскошными столами, как иностранные послы были поражены изобилием яств на столах и как они щедро приглашали всех своих подданных отведать еда. Традиционно за столом широко отмечаются также успешно выполненные важные задачи, обычаи народных празднеств, семейные события и торжества. Книга нашего героя Аркадага «Благословенный туркменский стол» входит в число любимых произведений поклонников туркменской кухни. Как известно, история туркменских деликатесов берет свое начало в глубокой древности, и с течением лет они совершенствовались и направлены на здоровье человека, пищеварение, питательность, вкус и сладость. Национальные блюда туркменского народа, как и деликатесы других народов, берут свое начало в глубокой древности и отличаются разнообразием и самобытностью.Дограма — традиционное национальное блюдо туркменского народа. Его название также происходит от слова «дограмак». Национальное туркменское блюдо «Тамдырлама» — любимое блюдо всей семьи, его готовят для друзей, гостей, на свадьбах и праздниках. Наши бабушки своими умелыми руками в прошлом приготовили множество национальных блюд из зерновых и бобовых, возведя их в ранг большого искусства. Подробно об этом говорится в книге «Благословенная туркменская скатерть» Общенационального лидера туркменского народа Гахрымана Аркадага. Наши национальные блюда являются уникальным свидетельством гостеприимства нашего народа."
                : dil === "tr"
                ? "Türkmen halkının ulusal yemekleri, diğer ulusların lezzetleri gibi, kökenleri antik çağlara dayanmaktadır ve çeşitlilik ve özgünlük ile ayırt edilirler. Günümüze ulaşan eski efsaneler, Türkmen şahlarının ve komutanlarının zaferlerini görkemli masalarda nasıl kutladıklarını, yabancı büyükelçilerin masalardaki yemeklerin bolluğuna nasıl şaşırdıklarını ve tüm tebaalarını cömertçe tatmaya nasıl davet ettiklerini anlatıyor. Geleneksel olarak, başarılı bir şekilde gerçekleştirilen önemli görevler, halk şenliklerinin gelenekleri, aile etkinlikleri ve kutlamalar da masada geniş çapta kutlanır. Kahramanımız Arkadağ'ın 'Mübarek Türkmen Masası' adlı kitabı Türkmen mutfağı hayranlarının en sevdiği eserler arasında yer alıyor. Bildiğiniz gibi Türkmen lezzetlerinin tarihi antik çağlardan kalmadır ve yıllar geçtikçe insan sağlığına, sindirime, beslenmeye, tada ve tatlılığa yönelik gelişmişlerdir. Türkmen halkının ulusal yemekleri, diğer ulusların lezzetleri gibi, kökenleri antik çağlara dayanmaktadır ve çeşitlilik ve özgünlük ile ayırt edilirler. Dograma, Türkmen halkının geleneksel ulusal yemeğidir. Adı aynı zamanda «dogramak» kelimesinden de gelmektedir. Milli Türkmen yemeği 'Tamdırlama' tüm ailenin en sevdiği yemektir ve arkadaşlar, misafirler, düğünler ve tatillerde hazırlanır. Büyükannelerimiz geçmişte yetenekli elleriyle tahıl ve baklagillerden birçok ulusal yemek hazırlamış ve onları büyük sanat rütbesine yükseltmişlerdir. Türkmen halkının ülke çapındaki lideri Gahriman Arkadağ'ın «Mübarek Türkmen Masa Örtüsü» kitabında bu konuda ayrıntılı olarak anlatılmaktadır. Milli yemeklerimiz, halkımızın misafirperverliğinin eşsiz bir kanıtıdır."
                : 'The national dishes of the Turkmen people, like the delicacies of other nations, originate in ancient times and are distinguished by their diversity and originality. Ancient legends that have come down to our days tell how Turkmen shahs and generals celebrated their victories at luxurious tables, how foreign ambassadors were amazed by the abundance of food on the tables and how they generously invited all their subjects to taste the food. Traditionally, important tasks that have been successfully completed, folk festivals, family events and celebrations are also widely celebrated at the table. The book of our hero Arkadag "The Blessed Turkmen table" is one of the favorite works of fans of Turkmen cuisine. As you know, the history of Turkmen delicacies dates back to ancient times, and over the years they have been improved and are aimed at human health, digestion, nutritional value, taste and sweetness. The national dishes of the Turkmen people, like the delicacies of other nations, originate in ancient times and are distinguished by their diversity and originality. Dogram is a traditional national dish of the Turkmen people. Its name also comes from the word "dogramak". The national Turkmen dish Tamdyrlama is a favorite dish of the whole family, it is prepared for friends, guests, weddings and holidays. Our grandmothers have prepared many national dishes from grains and legumes with their skillful hands in the past, elevating them to the rank of great art. This is described in detail in the book "The Blessed Turkmen Tablecloth" by the National leader of the Turkmen people, Gahryman Arkadag. Our national dishes are a unique testimony to the hospitality of our people'}
            </p>
          </div>
        </div>
        <img
          src={meals_bottom}
          alt="cloud-top"
          className="absolute z-20 object-cover sm:bottom-[-10px] md:bottom-[-80px] lg:bottom-[-113px] left-0 h-fit w-full"
        />
      </div>

      <AreYouReady />
    </>
  );
};

export default Turkmenistan;
