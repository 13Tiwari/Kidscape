The Safely app is a mobile application designed to enhance user safety by providing real-time monitoring and assistance from trusted contacts while navigating potentially dangerous areas. By leveraging geolocation, crime data, and messaging capabilities, Safely empowers users with up-to-date safety information and the option to notify friends or family in case of emergencies. Through features like local crime scores, emergency notifications, and location sharing, Safely aims to create a safer environment for users in unfamiliar or high-risk areas.

The frontend of Safely is built using React Native with Expo, allowing for a cross-platform experience on both iOS and Android. The app interface is designed with React Native Paper components for a consistent, user-friendly experience, and it includes React Native Maps to display the user’s location and surrounding areas. The dotenv package is used to manage environment variables securely, particularly for sensitive information like API keys. Geolocation services fetch the user’s real-time location, which is then used to assess local safety levels and provide location-based alerts.

On the backend, Safely employs Python to perform essential functions such as retrieving safety scores and sending emergency alerts. Using ipinfo.io, the app identifies the user’s location based on their IP address and then queries the OpenAI API to generate a "safety score" for the current city, offering users an indicative level of risk in their area. This safety score is stored in a JSON file and made available for the frontend to display. The backend also features Twilio and SMTP integrations to send SMS alerts, ensuring that emergency messages can be sent to friends or family directly and reliably.

The messaging system in Safely is implemented through two main components: email-based SMS alerts and Twilio-powered SMS alerts. The email.py script uses the Gmail SMTP server to send SMS notifications through email gateways, enabling the app to reach emergency contacts in urgent situations. Meanwhile, the message.py script directly uses Twilio’s API to send SMS messages, providing a straightforward and efficient way to alert contacts. Together, these two systems create a robust notification mechanism that users can rely on for emergency support.

In terms of user interface, the frontend includes modals for displaying crime rates and reporting options, which are accessible through dedicated buttons. The crime rate modal fetches and displays the safety score calculated by the backend, giving users instant access to localized safety data. The app also provides a map view of the user’s location with React Native Maps, helping users to understand their surroundings and navigate safely. Additionally, emergency buttons on the interface allow users to trigger alerts instantly, notifying their contacts when they need assistance.

To securely manage configurations and environment variables, Safely uses a .env file and the react-native-dotenv plugin. This setup ensures that sensitive information, such as API keys, is kept secure within the app’s environment. Configuration details, such as presets and plugins, are managed through babel.config.js, supporting the secure integration of essential keys and tokens.

Overall, Safely combines location data, crime analysis, and instant messaging to offer a comprehensive safety tool for users. The backend leverages Python for API interactions and emergency alert functionality, while the frontend uses React Native to create a streamlined and intuitive user experience. By providing real-time safety information and immediate access to emergency contacts, Safely ensures that users can navigate with confidence, knowing that support is just a tap away.
