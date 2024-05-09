const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeeNota(aluno){
    if (listaDeAlunosEMedias[0].includes(alunos)){

        const indice = listaDeAlunosEMedias[0].indexOf(alunos);

        const mediaAluno = listaDeAlunosEMedias[1][indice]

        console.log(`${aluno} tem a média ${mediaAluno}`)

    }else {
        console.log("Aluno não encontrado")
    }
}
exibeNomeeNota("João")
exibeNomeeNota("Juliana")
exibeNomeeNota("Ana")
exibeNomeeNota("Caio")