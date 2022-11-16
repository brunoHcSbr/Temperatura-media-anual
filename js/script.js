function mediaTemp(){
    const janeiro = prompt("Qual a temperatura média de Janeiro?") + ' °C'
    const fevereiro = prompt("Qual a temperatura média de Fevereiro?") + ' °C'
    const marco = prompt("Qual a temperatura média de Março?") + ' °C'
    const abril = prompt("Qual a temperatura média de Abril?") + ' °C'
    const maio = prompt("Qual a temperatura média de Maio?") + ' °C'
    const junho = prompt("Qual a temperatura média de Junho?") + ' °C'
    const julho = prompt("Qual a temperatura média de Julho?") + ' °C'
    const agosto = prompt("Qual a temperatura média de Agosto?") + ' °C'
    const setembro = prompt("Qual a temperatura média de Setembro?") + ' °C'
    const outubro = prompt("Qual a temperatura média de Outubro?") + ' °C'
    const novembro = prompt("Qual a temperatura média de Novembro?") + ' °C'
    const dezembro = prompt("Qual a temperatura média de Dezembro?") + ' °C'

    const media = ((parseFloat(janeiro)+parseFloat(fevereiro)+parseFloat(marco)+parseFloat(abril)+parseFloat(maio)+parseFloat(junho)+parseFloat(julho)+parseFloat(agosto)+parseFloat(setembro)+parseFloat(outubro)+parseFloat(novembro)+parseFloat(dezembro))/12) + ' °C';
    console.log(media);

    const mediaMeses = document.getElementById('mediaMeses');
    const jan = document.getElementById('jan');
    const fev = document.getElementById('fev');
    const marc = document.getElementById('marc');
    const abrl = document.getElementById('abril');
    const mai = document.getElementById('maio');
    const jun = document.getElementById('jun');
    const jul = document.getElementById('jul');
    const agost = document.getElementById('agosto');
    const setemb = document.getElementById('setemb');
    const out = document.getElementById('out');
    const novem = document.getElementById('novem');
    const dezem = document.getElementById('dezem');
    const med = document.getElementById('med');
    
    const tdJan = document.createElement('td');
    tdJan.innerText = janeiro;
    console.log(tdJan)

    const tdFev = document.createElement('td');
    tdFev.innerText = fevereiro;
    console.log(tdFev)

    const tdMarc = document.createElement('td');
    tdMarc.innerText = marco;
    const tdAbrl = document.createElement('td');
    tdAbrl.innerText = abril;
    const tdMai = document.createElement('td');
    tdMai.innerText = maio;
    const tdJun = document.createElement('td');
    tdJun.innerText = junho;
    const tdJul = document.createElement('td');
    tdJul.innerText = julho;
    const tdAgost = document.createElement('td');
    tdAgost.innerText = agosto;
    const tdSetemb = document.createElement('td');
    tdSetemb.innerText = setembro;
    const tdOut = document.createElement('td');
    tdOut.innerText = outubro;
    const tdNovem = document.createElement('td');
    tdNovem.innerText = novembro;
    const tdDezem = document.createElement('td');
    tdDezem.innerText = dezembro;
    const tdMed = document.createElement('td');
    tdMed.innerText = media;

    jan.appendChild(tdJan);
    console.log(jan)

    fev.appendChild(tdFev);
    console.log(fev)

    marc.appendChild(tdMarc);
    abrl.appendChild(tdAbrl);
    mai.appendChild(tdMai);
    jul.appendChild(tdJul);
    jun.appendChild(tdJun);
    agost.appendChild(tdAgost);
    setemb.appendChild(tdSetemb);
    out.appendChild(tdOut);
    novem.appendChild(tdNovem);
    dezem.appendChild(tdDezem);~
    med.appendChild(tdMed)

    mediaMeses.appendChild(jan);
    mediaMeses.appendChild(fev);
    mediaMeses.appendChild(marc);
    mediaMeses.appendChild(abrl);
    mediaMeses.appendChild(mai);
    mediaMeses.appendChild(jul);
    mediaMeses.appendChild(jun);
    mediaMeses.appendChild(agost);
    mediaMeses.appendChild(setemb);
    mediaMeses.appendChild(out);
    mediaMeses.appendChild(novem);
    mediaMeses.appendChild(dezem);
    mediaMeses.appendChild(med);

    /*const alunos = document.getElementById('alunos');
    const tr = document.createElement('tr');
    const tdNome = document.createElement('td');
    tdNome.innerText = nome;
    const tdMatematica = document.createElement('td');
    tdMatematica.innerText = matematica;
    const tdPortugues = document.createElement('td');
    tdPortugues.innerText = portugues;
    const tdCiencia = document.createElement('td');
    tdCiencia.innerText = ciencia;
    const tdMedia = document.createElement('td');
    tdMedia.innerText = media;

    tr.appendChild(tdNome);
    tr.appendChild(tdMatematica);
    tr.appendChild(tdPortugues);
    tr.appendChild(tdCiencia);
    tr.appendChild(tdMedia);
    alunos.appendChild(tr);*/
}
document.getElementById('add').addEventListener('click',mediaTemp);
//window.addEventListener('load',mediaTemp);