// pages/api/automation.js
import { Builder } from 'selenium-webdriver';

export default async function handler(req, res) {
  const { action } = req.body;

  if (action === 'run') {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://example.com'); // Change to the target website
      // Perform automation steps here
      await driver.sleep(5000); // Example: Wait for 5 seconds
      res.status(200).json({ message: 'Automation script ran successfully!' });
    } catch (error) {
      console.error('Error running automation script:', error);
      res.status(500).json({ message: 'Failed to run automation script.' });
    } finally {
      await driver.quit();
    }
  } else {
    res.status(400).json({ message: 'Invalid action' });
  }
}
