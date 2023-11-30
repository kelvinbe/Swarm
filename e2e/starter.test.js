describe('HomeView', () => {
  beforeEach(async () => {
    await device.launchApp()
    await device.reloadReactNative();
  });

  it('should render SummaryList when data is loaded', async () => {
    // Wait for the loading indicator to disappear
    await waitFor(element(by.id('loading-indicator')))
      .toBeNotVisible()
      .withTimeout(5000); // Adjust the timeout as needed

    // Now, check if the TopicSummaryList is visible
    await expect(element(by.id('summary-list'))).toBeVisible();
  });

  
});
