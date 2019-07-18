// usando reduce

var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

var mesesComBarra = (anterior, atual) => {
    if(anterior === ''){
        return atual;
    }else{
        return anterior + '/' + atual;
    }
};

const mesesBarra = meses.reduce(mesesComBarra, '');
console.log(mesesBarra)