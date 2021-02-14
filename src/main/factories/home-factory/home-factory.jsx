import HomeCustom from '../../../themes/custom/Home';
import HomeLucid from '../../../themes/lucid/Home';
import HomeDefault from '../../../themes/default/Home';

export default function HomeFactory({ theme }) {
    const obj = {
        custom: <HomeCustom />,
        lucid: <HomeLucid />
    };
    return obj[theme] || <HomeDefault />;
}
