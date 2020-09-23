describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show info widgets', async () => {
    // widgets
    await expect(element(by.text('Temperature'))).toBeVisible();
    await expect(element(by.text('Blood'))).toBeVisible();
    await expect(element(by.text('Oximeter'))).toBeVisible();
  });

  it('should show the MeasureScreen and cards', async () => {
    await expect(element(by.text('Measure Now'))).toBeVisible();
    await element(by.text('Measure Now')).tap();
    // screens
    await expect(element(by.text('Measure Screen'))).toBeVisible();
    // cards
    await expect(element(by.id('TemperatureCard'))).toBeVisible();
    await expect(element(by.id('BloodCard'))).toBeVisible();
    await expect(element(by.id('OximeterCard'))).toBeVisible();
    // button
    await expect(element(by.text('COMPLETE'))).toBeVisible();
  });

  it('should measure temperature', async () => {
    await expect(element(by.text('Measure Now'))).toBeVisible();
    await element(by.text('Measure Now')).tap();
    
    await expect(element(by.text('Measure Screen'))).toBeVisible();
    await element(by.id('TemperatureCardButton')).tap();
    await expect(element(by.id('TemperatureData'))).toBeVisible();
    await element(by.id('CompleteButton')).tap();
  });
  
});
