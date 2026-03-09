import mountainTrekHero from '../assets/images/mountain_trek_hero.png';
import valleyOfFlowers from '../assets/images/valley_of_flowers.png';
import monsoonTrek from '../assets/images/monsoon_trek.png';
import profileBanner from '../assets/images/profile_banner.png';
import trekDetailHeader from '../assets/images/trek_detail_header.png';

const imageMap = {
  mountain_trek_hero: mountainTrekHero,
  valley_of_flowers: valleyOfFlowers,
  monsoon_trek: monsoonTrek,
  profile_banner: profileBanner,
  trek_detail_header: trekDetailHeader,
};

export function getImage(key) {
  return imageMap[key] || mountainTrekHero;
}
