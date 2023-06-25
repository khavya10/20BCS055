const axios = require('axios');
// const regcomp=async()=>{
//     try{
//         const regdat={
//             compn,
//             ownn,
//             rolln,
//             owem,
//             accessscode,
//         }
//     }

// }
const registerCompany = async () => {
  try {
    const registrationData = {
      companyName: 'Train Central',
      ownerName: 'Rahul',
      rollNo: '20BCS055',
      ownerEmail: 'rahul@abc.edu',
      accessCode: 'nSFqRI',
    };

    const response = await axios.post('http://104.211.219.98/train/register', registrationData);
    const { companyName, clientID, clientSecret } = response.data;

    console.log('Registration Successful');
    console.log('Company Name:', companyName);
    console.log('Client ID:', clientID);
    console.log('Client Secret:', clientSecret);

    return { clientID, clientSecret };
  } catch (error) {
    console.error('Registration failed', error);
    throw error;
  }
};

const getAuthToken = async ({ clientID, clientSecret }) => {
  try {
    const authData = {
      companyName: 'Train Central',
      clientID,
      ownerName: 'Rahul',
      ownerEmail: 'rahul@abc.edu',
      rollNo: '20BCS055',
      clientSecret,
    };

    const response = await axios.post('http://104.211.219.98/train/auth', authData);
    const { access_token } = response.data;

    return access_token;
  } catch (error) {
    console.error('Failed to obtain authorization token', error);
    throw error;
  }
};

const fetchTrainDetails = async () => {
  try {
    const { clientID, clientSecret } = await registerCompany();
    const authToken = await getAuthToken({ clientID, clientSecret });

    const response = await axios.get('http://104.211.219.98/train/trains', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const trainDetails = response.data;
    console.log('Train Details:', trainDetails);
  } catch (error) {
    console.error('Failed to fetch train details', error);
    throw error;
  }
};

fetchTrainDetails();
