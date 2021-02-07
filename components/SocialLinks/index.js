export default function SocialLinks(props){
    const {socialLinks} = props;
    return (
        socialLinks.map(link=>
            <a key={link.name} href={link.link} aria-label={link.arialabel}target="_blank" rel="noopener nofollow">
                {link.name}
            </a>
        )
    );

}

