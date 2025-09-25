describe('Pizza.cy.jsx', () => {
  
  it('İsim inputuna doğru veriler girildiğinde hata mesajı kayboluyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.get('[data-cy="siparis-isim-input"]').type("Melike")
    cy.contains(" En az 3 karakter olmalıdır*").should('not.be.visible')
  })

  it('İsim inputuna yanlış veriler girildiğinde hata mesajı görünüyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.get('[data-cy="siparis-isim-input"]').type("Me")
    cy.contains(" En az 3 karakter olmalıdır*").should('be.visible')
  })

  it('İsim inputu hariç diğer veriler doğru girildiğinde hata mesajı görünüyor ve buton disabled oluyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.get('label[for="M"]').click()
    cy.get('[daya-cy="hamur"]').select('Süpper İnce')
    cy.get('input[value="Biber"]').click()
    cy.get('input[value="Jalepeno"]').click()
    cy.get('input[value="Pepperoni"]').click()
    cy.get('input[value="Mısır"]').click()
    cy.get('[data-cy="siparis-isim-input"]').type("Me")
    cy.contains(" En az 3 karakter olmalıdır*").should('be.visible')
    cy.contains("SİPARİŞ VER").should('be.disabled')
  })



  it('4 malzeme seçildiğinde uyarı mesajı kayboluyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.get('input[value="Biber"]').click()
    cy.get('input[value="Jalepeno"]').click()
    cy.get('input[value="Pepperoni"]').click()
    cy.get('input[value="Mısır"]').click()
    cy.contains("En az 4 malzeme seçmelisiniz*").should('not.exist')
  })

  it('10 malzeme seçildiğinde uyarı mesajı görünüyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.get('input[value="Biber"]').click()
    cy.get('input[value="Jalepeno"]').click()
    cy.get('input[value="Pepperoni"]').click()
    cy.get('input[value="Mısır"]').click()
    cy.get('input[value="Sucuk"]').click()
    cy.get('input[value="Zeytin"]').click()
    cy.get('input[value="Kabak"]').click()
    cy.get('input[value="Soğan"]').click()
    cy.get('input[value="Sarımsak"]').click()
    cy.get('input[value="Domates"]').click()
    cy.get('[data-cy="malzeme"]').should('be.visible')
  })

  it('Diğer veriler doğru ama ek malzeme bölümünden 3 malzeme seçildiğinde uyarı mesajı görünüyor ve buton disabled oluyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.get('label[for="M"]').click()
    cy.get('[daya-cy="hamur"]').select('Süpper İnce')
    cy.get('input[value="Biber"]').click()
    cy.get('input[value="Jalepeno"]').click()
    cy.get('input[value="Pepperoni"]').click()
    cy.get('[data-cy="siparis-isim-input"]').type("Melike")
    cy.contains("Yıldızlı (*) alanların doldurulması zorunludur.").should('be.visible')
    cy.contains("SİPARİŞ VER").should('be.disabled')
  })



  it('Sipariş sayfası açıldığında buton disabled oluyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.contains("Yıldızlı (*) alanların doldurulması zorunludur.").should('be.visible')
    cy.contains("SİPARİŞ VER").should('be.disabled')
  })



  it('Diğer veriler doğru ama boyut seçilmediğinde buton disabled oluyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.get('[daya-cy="hamur"]').select('Süpper İnce')
    cy.get('input[value="Mısır"]').click()
    cy.get('input[value="Sucuk"]').click()
    cy.get('input[value="Zeytin"]').click()
    cy.get('input[value="Soğan"]').click()
    cy.get('[data-cy="siparis-isim-input"]').type("Melike")
    cy.contains("Yıldızlı (*) alanların doldurulması zorunludur.").should('be.visible')
    cy.contains("SİPARİŞ VER").should('be.disabled')
  })



   it('Diğer veriler doğru ama hamur kalınlığı seçilmediğinde buton disabled oluyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.get('label[for="M"]').click()
    cy.get('input[value="Biber"]').click()
    cy.get('input[value="Jalepeno"]').click()
    cy.get('input[value="Pepperoni"]').click()
    cy.get('input[value="Mısır"]').click()
    cy.get('[data-cy="siparis-isim-input"]').type("Melike")
    cy.contains("Yıldızlı (*) alanların doldurulması zorunludur.").should('be.visible')
    cy.contains("SİPARİŞ VER").should('be.disabled')
  })



  it('Eksi butonuna basılğında 1 sayısı aynı kalıyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.get('.input-group > :nth-child(1)').click()
    cy.get('.input-group-text').should('contain', '1')
  })

  it('Artı butonuna basılğında 1 sayısı değişiyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.get('.input-group > :nth-child(3)').click()
    cy.get('.input-group-text').should('contain', '2')
  })
  


  it('Form doğru veriler girilince gönderilebiliyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.get('label[for="M"]').click()
    cy.get('[daya-cy="hamur"]').select('Süpper İnce')
    cy.get('input[value="Biber"]').click()
    cy.get('input[value="Jalepeno"]').click()
    cy.get('input[value="Pepperoni"]').click()
    cy.get('input[value="Mısır"]').click()
    cy.get('[data-cy="siparis-isim-input"]').type("Melike")
    cy.contains("Yıldızlı (*) alanların doldurulması zorunludur.").should('not.visible')
    cy.contains("SİPARİŞ VER").click()
    cy.url().should('include', '/success')
  })



  it('Success sayfası seçilen değerleri içeriyor mu?', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="anasayfa-buton"]').click()
    cy.url().should('include', '/siparis')
    cy.get('label[for="M"]').click()
    cy.get('[daya-cy="hamur"]').select('Süpper İnce')
    cy.get('input[value="Biber"]').click()
    cy.get('input[value="Jalepeno"]').click()
    cy.get('input[value="Pepperoni"]').click()
    cy.get('input[value="Mısır"]').click()
    cy.get('[data-cy="siparis-isim-input"]').type("Melike")
    cy.contains("Yıldızlı (*) alanların doldurulması zorunludur.").should('not.visible')
    cy.contains("SİPARİŞ VER").click()
    cy.url().should('include', '/success')
    cy.contains("M").should('be.visible')
    cy.contains("Süpper İnce").should('be.visible')
    cy.contains("Biber").should('be.visible')
    cy.contains("Jalepeno").should('be.visible')
    cy.contains("Pepperoni").should('be.visible')
    cy.contains("Mısır").should('be.visible')
  })

})