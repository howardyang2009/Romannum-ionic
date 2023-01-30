import HomePage from './pages/homepage'

// describe('template spec', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

describe('HomePage', () => {
  it('CalculateButton-OK', () => {
    const home = new HomePage();

    home.navigateTo();

    home.setNum1('III');
    home.setNum2('V');

    home.clickCalculateButton();

    home.getSum().should(($sum) => {
      const val = $sum.val()
      expect(val).to.equal('VIII')
    })

    home.getMessage().should(($message) => {
      const val = $message.text()
      expect(val).to.equal('RomanNumCalc1 : III + V = VIII | 3 + 5 = 8')
    })
  })

  it('RomannumSampleButton-OK', () => {
    const home = new HomePage();
    
    home.navigateTo();

    home.clickRomannumSampleButton()

    home.getNum1().should(($num1) => {
      const val = $num1.val()
      expect(val).to.equal('V')
    })

    home.getNum2().should(($num2) => {
      const val = $num2.val()
      expect(val).to.equal('IV')
    })
  })
})