import SocialLink from '@/components/molecules/SocialLink'
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';

type SocialNavProps = {
    facebook?:string;
    instagram?:string;
    youtube?:string;
    tiktok?:string;
}

 const NETWORKS: {name: keyof SocialNavProps; icon:IconProp}[] = [
        {name:"facebook", icon:faFacebook},
        {name:"instagram", icon:faInstagram},
        {name:"youtube", icon:faYoutube},
        {name:"tiktok", icon:faTiktok}
    ]

const fetchSocialItems = async ():Promise<SocialNavProps> => {
    const res = await (fetch("https://asek.academy/wp-json/website/v1/association-info",
        {
            headers:{
            Accept: "application/json", 
        },
        cache:"force-cache"
    }
    ))
    if(!res.ok) throw new Error(`Erreur: ${res.status}`);
    return res.json();
} 


const SocialNav = async () => {
   

    const socials = await fetchSocialItems()

    const links = NETWORKS.flatMap(({name, icon}) => {
        const url = socials[name]
        return url ? [{name, url, icon}]:[] 
})


    return (
        <ul aria-label="liens social média">
            {
               links.map((link) => (
                <li key={link.name}>
                    <SocialLink href={link.url} icon={link.icon} label={`Suivez-nous sur ${link.name}`} />
                </li>
               ))
            }
        </ul>
    )
}



export default SocialNav