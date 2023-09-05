let studenti = [
    {
      ime: 'Ivan',
      prezime: 'Popović',
      prosjek: '6.34'
    },
    {
      ime: 'Nikola',
      prezime: 'Marković',
      prosjek: '9.11'
    },
    {
      ime: 'Maja',
      prezime: 'Stojanović',
      prosjek: '7.42'
    },
    {
      ime: 'Sara',
      prezime: 'Stojanović',
      prosjek: '9.86'
    },
    {
      ime: 'Milica',
      prezime: 'Đorđević',
      prosjek: '6.45'
    },
    {
      ime: 'Marko',
      prezime: 'Marković',
      prosjek: '8.72'
    },
    {
      ime: 'Ivan',
      prezime: 'Jovanović',
      prosjek: '7.89'
    },
    {
      ime: 'Nikola',
      prezime: 'Petrović',
      prosjek: '7.34'
    },
    {
      ime: 'Petar',
      prezime: 'Marković',
      prosjek: '6.13'
    },
    {
      ime: 'Sara',
      prezime: 'Stojanović',
      prosjek: '9.55'
    }
  ]

  studenti.forEach(s => {
    if(s.prosjek >= 8.5){
        console.log(s.ime + " " + s.prezime)
    }
  });

  console.log("drugi nacin:")
  for(s in studenti){
    if(studenti[s].prosjek >=8.5){
        console.log(studenti[s].ime + " " + studenti[s].prezime)
    }
  }