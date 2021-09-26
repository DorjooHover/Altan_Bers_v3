const orgonFormat = document.getElementById('orgon_format')
const orgonFormatPopUp = document.getElementById('orgon_format_pop_up')
const gereltuulegtei_hayag = document.getElementById('gereltuulegtei_hayag')
const gereltuulegtei_hayagPopUp = document.getElementById('gereltuulegtei_hayag_pop_up')
const dotroosoo_gereltei_hayag = document.getElementById('dotroosoo_gereltei_hayag')
const dotroosoo_gereltei_hayagPopUp = document.getElementById('dotroosoo_gereltei_hayag_pop_up')
const dotor_gadna_biet_hayag = document.getElementById('dotor_gadna_biet_hayag')
const dotor_gadna_biet_hayagPopUp = document.getElementById('dotor_gadna_biet_hayag_pop_up')
const busad_reklam = document.getElementById('busad_reklam')
const busad_reklamPopUp = document.getElementById('busad_reklam_pop_up')
const urgumjlul_urilga = document.getElementById('urgumjlul_urilga')
const urgumjlul_urilgaPopUp = document.getElementById('urgumjlul_urilga_pop_up')
const material = document.getElementById('material')
const materialPopUp = document.getElementById('material_pop_up')
const tumur_laser = document.getElementById('tumur_laser')
const tumur_laserPopUp = document.getElementById('tumur_laser_pop_up')
const gadna_tug_dalbaa = document.getElementById('gadna_tug_dalbaa')
const gadna_tug_dalbaaPopUp = document.getElementById('gadna_tug_dalbaa_pop_up')
const body = document.getElementById('body')

orgonFormat.onclick=pop_up_orgonFormat;
orgonFormatPopUp.onclick=pop_down_orgonFormat;

function pop_up_orgonFormat() {
    orgonFormatPopUp.style.display = 'block'
    orgonFormatPopUp.style.top = '115vh'
    body.style.overflow = 'hidden';
}
function pop_down_orgonFormat() {
    orgonFormatPopUp.style.display = 'none'
    body.style.overflow = 'scroll'
}

gereltuulegtei_hayag.onclick=pop_up_gereltuulegtei_hayag;
gereltuulegtei_hayagPopUp.onclick=pop_down_gereltuulegtei_hayag;

function pop_up_gereltuulegtei_hayag() {
    gereltuulegtei_hayagPopUp.style.display = 'block'
    body.style.overflow = 'hidden';
    gereltuulegtei_hayagPopUp.style.top = '115vh'
}
function pop_down_gereltuulegtei_hayag() {
    gereltuulegtei_hayagPopUp.style.display = 'none'
    body.style.overflow = 'scroll'
}
dotroosoo_gereltei_hayag.onclick=pop_up_dotroosoo_gereltei_hayag;
dotroosoo_gereltei_hayagPopUp.onclick=pop_down_dotroosoo_gereltei_hayag;

function pop_up_dotroosoo_gereltei_hayag() {
    dotroosoo_gereltei_hayagPopUp.style.display = 'block'
    body.style.overflow = 'hidden';
    dotroosoo_gereltei_hayagPopUp.style.top = '115vh'
}
function pop_down_dotroosoo_gereltei_hayag() {
    dotroosoo_gereltei_hayagPopUp.style.display = 'none'
    body.style.overflow = 'scroll'
}
dotor_gadna_biet_hayag.onclick=pop_up_dotor_gadna_biet_hayag;
dotor_gadna_biet_hayagPopUp.onclick=pop_down_dotor_gadna_biet_hayag;

function pop_up_dotor_gadna_biet_hayag() {
    dotor_gadna_biet_hayagPopUp.style.display = 'block'
    body.style.overflow = 'hidden';
    dotor_gadna_biet_hayagPopUp.style.top = '115vh'
}
function pop_down_dotor_gadna_biet_hayag() {
    dotor_gadna_biet_hayagPopUp.style.display = 'none'
    body.style.overflow = 'scroll'
}
busad_reklam.onclick=pop_up_busad_reklam;
busad_reklamPopUp.onclick=pop_down_busad_reklam;

function pop_up_busad_reklam() {
    busad_reklamPopUp.style.display = 'block'
    body.style.overflow = 'hidden';
    busad_reklamPopUp.style.top = '115vh'
}
function pop_down_busad_reklam() {
    busad_reklamPopUp.style.display = 'none'
    body.style.overflow = 'scroll'
}
urgumjlul_urilga.onclick=pop_up_urgumjlul_urilga;
urgumjlul_urilgaPopUp.onclick=pop_down_urgumjlul_urilga;

function pop_up_urgumjlul_urilga() {
    urgumjlul_urilgaPopUp.style.display = 'block'
    body.style.overflow = 'hidden';
    urgumjlul_urilgaPopUp.style.top = '115vh'
}
function pop_down_urgumjlul_urilga() {
    urgumjlul_urilgaPopUp.style.display = 'none'
    body.style.overflow = 'scroll'
}
material.onclick=pop_up_material;
materialPopUp.onclick=pop_down_material;

function pop_up_material() {
    materialPopUp.style.display = 'block'
    body.style.overflow = 'hidden';
    materialPopUp.style.top = '115vh'
}
function pop_down_material() {
    materialPopUp.style.display = 'none'
    body.style.overflow = 'scroll'
}
tumur_laser.onclick=pop_up_tumur_laser;
tumur_laserPopUp.onclick=pop_down_tumur_laser;

function pop_up_tumur_laser() {
    tumur_laserPopUp.style.display = 'block'
    body.style.overflow = 'hidden';
    tumur_laserPopUp.style.top = '115vh'
}
function pop_down_tumur_laser() {
    tumur_laserPopUp.style.display = 'none'
    body.style.overflow = 'scroll'
}
gadna_tug_dalbaa.onclick=pop_up_gadna_tug_dalbaa;
gadna_tug_dalbaaPopUp.onclick=pop_down_gadna_tug_dalbaa;

function pop_up_gadna_tug_dalbaa() {
    gadna_tug_dalbaaPopUp.style.display = 'block'
    body.style.overflow = 'hidden';
    gadna_tug_dalbaaPopUp.style.top = '115vh'
}
function pop_down_gadna_tug_dalbaa() {
    gadna_tug_dalbaaPopUp.style.display = 'none'
    body.style.overflow = 'scroll'
}