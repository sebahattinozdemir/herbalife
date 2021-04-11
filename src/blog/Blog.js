import React from 'react'
import "./Blog.css";
import h1 from "./herbalife1.jpg";
import h2 from "./herbalife2.jpg";
import h3 from "./herbalife3.jpg";

function Blog() {
    return (
    <div className="container border border-5">
      <div className="row">
           
   


                <div className="col-lg-4 col-md-6 col-sm-6 col-12 duyuruholder">
                <img src={h1} className="blogcard" alt="..."></img>
                <p className="blogbaslik">KİŞİYE ÖZEL KOÇLUK</p> 
                <p className="blogyazi">Sağlıklı tercihler yapmak ve beslenme alışkanlıklarını iyileştirmek her zaman kolay değildir. Bu, zaman ve motivasyon gerektiren bir süreçtir. Tam da bu noktada, Herbalife Nutrition koçunuz gerçek anlamda fark yaratmanıza yardımcı olacak. Koçunuz kişiye özel rehberlik, tavsiye ve destek sunarak, hedeflerinizi gerçeğe dönüştürebilmeniz için sizinle omuz omuza çalışacak.
                </p>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12 duyuruholder">
                <img src={h2} className="blogcard" alt="..."></img>
                <p className="blogbaslik">NEDEN HERBALIFE NUTRITION</p> 
                <p className="blogyazi">Öğün yerine geçen shake ve gıda takviyesi ürünlerinin geliştirilmesinde 40 yılı aşkın tecrübemizle, beslenme alanında uzmanız. Ürünlerimiz, hedeflerinize ulaşmanıza yardımcı olmak için özel olarak tasarlanmaktadır ancak bizi özel kılan asıl değer, sürekli olarak büyüyen topluluğumuzdur. Tüm dünyada faaliyet gösteren Bağımsız Distribütör ağımız, beslenme yolculuğunuzda size her konuda destek vermeye hazırdır.
                </p>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12 duyuruholder">
                <img src={h3} className="blogcard" alt="..."></img>
                <p className="blogbaslik">GÜNE DOĞRU BAŞLAYIN</p> 
                <p className="blogyazi">Herbalife Nutrition İdeal Kahvaltı, dengeli ve besin içeriğiyle fark yaratır ve neredeyse hiç hazırlık gerektirmez. Daha iyisini duymaya hazır mısınız? Bu ürünü ihtiyaçlarınıza uygun hale getirebilirsiniz. Dengeli kahvaltı ürünümüz, sabahları güne başlamak için ihtiyaç duyduğunuz enerjiyi almanızı sağlar.
                </p>
                </div>

                

                



            </div>    
      </div>

   
    )
}

export default Blog
