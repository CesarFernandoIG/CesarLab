document.getElementById("title").innerText = "Tablas de multiplicar";
document.write(
    `
    <div class="flex-container flex-container--wrap">  
    `
);

for (let i = 1; i <= 10; i++) {
    document.write(
        `
        <div class="container card" data-aos="${(i==1)?"":"fade-up"}">
            <h6 class="center-justified-text">Número ${i}</h2>
            <table class="center-justified-text" style="margin: auto;">
        `
    );
    for (let j = 1; j <= 10; j++) {
        document.write(
            `
            <tr>
                <td>${i}</td>
                <td>x</td>
                <td>${j}</td>
                <td>=</td>
                <td>${i*j}</td>
            </tr>
            `
        );
    }   
    document.write(
        `
            </table>
        </div>
        `
    );
}

document.write(
    `
    </div>
    `
);