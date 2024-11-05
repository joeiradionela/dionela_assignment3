import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import { useState } from 'react';
import Login from './src/pages/Login';
import Registration from './src/pages/Registration';
import PasswordRecovery from './src/pages/PasswordRecovery'; // Import PasswordRecovery component

export default function App() {
  const [currentPage, setCurrentPage] = useState('login'); // State to track the current page

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login setCurrentPage={setCurrentPage} />;
      case 'registration':
        return <Registration setCurrentPage={setCurrentPage} />;
      case 'passwordRecovery':
        return <PasswordRecovery setCurrentPage={setCurrentPage} />;
      default:
        return <Login setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={Appstyles.scrollContainer}>
            {renderPage()}
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const Appstyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
});
