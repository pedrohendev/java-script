try {
    // executada quando não há erros
    console.log(`Abri um arquivo`);
    console.log(`Manipulei o arquivo e gerou erro`);
    console.log(`Fechei o arquivo`);
} catch (e) {
    // executada quando há erros
    console.log(`Tratando o erro`);
} finally {
    // sempre
}