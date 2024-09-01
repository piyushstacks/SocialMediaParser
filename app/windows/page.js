// app/windows/page.js
import { useState } from 'react';
import Layout from '../../components/Layout';
import { runAutomationScript } from '../../utils/automation';

const WindowsAutomation = () => {
  const [isRunning, setIsRunning] = useState(false);

  const handleRunScript = async () => {
    setIsRunning(true);
    try {
      await runAutomationScript();
      alert('Automation script ran successfully!');
    } catch (error) {
      console.error('Error running automation script:', error);
      alert('Failed to run automation script.');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <Layout>
      <h1>Windows Automation</h1>
      <button onClick={handleRunScript} disabled={isRunning}>
        {isRunning ? 'Running...' : 'Run Automation Script'}
      </button>
    </Layout>
  );
};

export default WindowsAutomation;
