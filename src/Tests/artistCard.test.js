import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


const card = require('../Components/artistCard');
const testData =[{
    "id": 510,
    "name": "Maroon 5",
    "url": "http://www.bandsintown.com/Maroon5?came_from=67",
    "image_url": "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
    "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg",
    "facebook_page_url": "https://www.facebook.com/maroon5",
    "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
    "tracker_count": 0,
    "upcoming_event_count": 0
  }]


test('component is passed the artist details as prop and it renders a profile card', () => {
    expect(testData).toEqual({id: 510, name: 'Maroon 5'});

})