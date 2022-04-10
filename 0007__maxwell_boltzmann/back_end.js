max_v = 2.5e3;
kB = 1.3806e-23;
au_to_kg = 1.66054e-27;

function calculations() {
    m = document.getElementById("mass_input").value;
    T = document.getElementById("temperature_input").value;

    m = m * au_to_kg;

    vp = 2 * kB * T;
    vp = Math.sqrt(vp / m);

    vm1 = 2 * vp;
    vm2 = Math.sqrt(Math.PI);

    vm = vm1 / vm2;

    vrms = Math.sqrt(3 / 2);
    vrms = vrms * vp;

    document.getElementById("v_p").value = Math.round(vp);
    document.getElementById("v_mean").value = Math.round(vm);
    document.getElementById("v_rms").value = Math.round(vrms);


}

function maxwell()
{
    m = document.getElementById("mass_input").value;
    T = document.getElementById("temperature_input").value;

    m = m * au_to_kg;

    out = [];

    for (var i = 0; i < max_v; i += 50) {
        f1 = 4 * Math.PI;

        f2 = 2 * Math.PI * kB * T;
        f2 = m / f2;
        f2 = Math.sqrt(f2);
        f2 = Math.pow(f2, 3);

        f3 = 2 * kB * T;
        f3 = (m * Math.pow(i, 2)) / f3;
        f3 = Math.exp(-f3);

        f4 = f1 * f2 * f3 * Math.pow(i, 2);

        out.push(f4.toExponential());
    }

    return out;
}

function __linspace(start, nvalues, interval) {
    if (typeof interval === "undefined") {
        interval = 0;
    }
    var i;
    var r = [];
    for (i = 0; i < nvalues; i++) {
        r.push(start + (i * interval));
    }
    return r;
}

function make_plot()
{
    out = maxwell();
    v = __linspace(0, out.length, 50);

    m = document.getElementById("mass_input").value;
    T = document.getElementById("temperature_input").value;

    new Chart(document.getElementById('my_chart'), {
        type: 'line',
        data: {
            labels: v,
            datasets: [{
                    data: out,
                    label: 'Speed distribution of a gas with m = ' + m + ' u at T = ' + T + ' K',
                    fill: false
                }]
        },
        options: {
            title: {
                display: true,
                text: 'Maxwell-Boltzmann speed distribution'
            },
            scales: {
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Probability density (s/m)'
                        }
                    }],
                xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Speed (m/s)'
                        }
                    }]
            }
        }
    });
}
