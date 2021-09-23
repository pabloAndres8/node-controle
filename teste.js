function post(testando, callback){
    const req = 'req';
    const res = 'res';
    const next = 'next';
    const erro = 'Deu erro!';

    console.log('testando!', testando);
    console.log('testando!', testando);
    console.log('testando!', testando);
    console.log('testando!', testando);

    const se = false;
    if(se){
        callback(req, res, next);
    }else{
        callback(erro, req, res, next);
    }
}

post('/', (erro, req, res, proximo) => {
    console.log(erro, req, res, proximo);
});