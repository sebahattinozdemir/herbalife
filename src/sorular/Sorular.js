import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import useDocumentTitle from "../useDocumentTitle";
import   "./Sorular.css";
import Header from "../headerComponent/Header.js";

function Sorular() {
  useDocumentTitle('Sık Sorulan Sorular - Herbalife')
  return (
    <div classNameName="row">
    <Header page_title="Sık Sorulan Sorular" />
        <div className="col12" id="" style={{padding:"1.5rem"}}>
        <Accordion multiple activeIndex={[0]}>
          <AccordionTab  headerClassName="header" header="Sipariş Verirken Nelere Dikkat Etmeliyim?">
            <p style={{textAlign:"justify"}}>
              Siparişinin kargo ile gönderiminde, üye olurken doldurduğun üyelik
              formundaki bilgilerden yararlanılır. Siparişinin gönderimi
              sırasında doğacak herhangi bir sorunda müşteri temsilcimiz, üyelik
              bilgilerinden yararlanarak seninle iletişime geçer. Bu nedenle
              üyelik bilgilerinin eksiksiz ve güncel olmasını rica ederiz.
              Üyelik bilgilerini güncellemek için hesabım kısmından
              düzenleyebilirsiniz Siparişin tarafımıza bildireceğin kargo
              adresine gönderilir. Kargo teslimatı sırasında bir sorun
              yaşanmaması için adres bilgilerinin eksiksiz ve güncel olduğunu
              kontrol etmeni rica ederiz. Adres eklemek veya mevcut adresini
              güncellemek için hesabım kısmından düzenleyebilirsiniz
            </p>
          </AccordionTab>
          <AccordionTab header="İstediğim Ürünü Nasıl Sepetime Ekler/Sipariş Edebilirim?">
            <p style={{textAlign:"justify"}}>
              Aradığın ürünü bulduktan sonra ürünün fotoğrafına ya da ismine
              tıklaman durumunda ürün için özel yaptığımız sayfaya
              ulaşabilirsin. Bu sayfada ürünün fiyatını, alternatif
              fotoğraflarını, ürünle ilgili kısa detay bilgilerini ve stokta
              durumunu görebilirsin. Satın almak istediğiniz ürün sayısını seçip
              ürünü sepetine ekleyip alışveriş işlemine devam edebilirsin.
            </p >
          </AccordionTab>
          <AccordionTab header="Sepetime Eklediğim Ürün Benim Adıma Ayrılıyor Mu?">
            <p style={{textAlign:"justify"}}>
              Ürünü sepetine eklemen, ürünün sana ayrıldığı anlamına
              gelmemektedir. Ürünü sipariş vermen ve ödemenin tarafımıza
              ulaşması durumunda ürün senin adına ayrılmış olur.
            </p>
          </AccordionTab>
        </Accordion>


            
        </div>
          
            

  </div>
    
  );
}

export default Sorular;
