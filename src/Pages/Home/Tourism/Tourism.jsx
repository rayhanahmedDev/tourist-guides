import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Overview from '../../../Component/Overview';
import OurPackages from '../../../Component/OurPackages';
import TourGuide from './TourGuide';

const Tourism = () => {
    return (
        <div className="my-16 lg:h-[90vh]">
            <div>
                <h2 className="text-4xl font-bold text-center">Tourism and Travel Guide</h2>
            </div>
            <div className='my-12 mx-6 lg:mx-0'>
                <Tabs>
                    <TabList className='text-center'>
                        <Tab>Overview</Tab>
                        <Tab>Our Packages</Tab>
                        <Tab>Meet Our Tour Guides</Tab>
                    </TabList>
                    <TabPanel>
                        <Overview></Overview>
                    </TabPanel>
                    <TabPanel>
                       <OurPackages></OurPackages>
                    </TabPanel>
                    <TabPanel>
                        <TourGuide></TourGuide>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Tourism;