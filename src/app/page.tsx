
import Main        from '../../pages/main';
import MusicVideos from '../../pages/musicvideos';
import MusicStore  from '../../pages/musicstore';
import Contact     from '../../pages/contacto';
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
      <MusicVideos />
      <MusicStore  />
      <Contact     />
      <Footer      />  
    
    </>
  );
}
