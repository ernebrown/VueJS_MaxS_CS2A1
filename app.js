const app = Vue.createApp({
  data() {
    return {
      myName: 'Tina',
      myAge: 45,
      myValueInput: 'Tina Brown',
      imageLink:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcURczSdiAMA8PXsqGdrtJWQ9tR7kzl1VlLcC25_gD3g5ngdZW6Q55awiwZeM2Yi0y1Y&usqp=CAU',
    };
  },
  methods: {
    myAgePlus5() {
      return this.myAge + 5;
    },
    myOwnRandomNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount('#assignment');
