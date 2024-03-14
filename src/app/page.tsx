
import Main        from '../../pages/main';
import UltimosLanzamientos from '../../pages/ultimos-lanzamientos';
import Tienda  from '../../pages/tienda';
import Contacto     from '../../pages/contacto';
import Footer      from '../../pages/footer';
import                  '../assets/global.scss';    
import { Metadata }from 'next';
 
export const metadata: Metadata = {
  title: 'Golden Dragon Beats',
  description: 'Golden dragon beats page',
};

export default function Home() {

  return (
    <>     
    
      <Main        />
      <UltimosLanzamientos />
      <Tienda      />
      <Contacto     />
      <Footer      />  
    
    </>
  );
}
