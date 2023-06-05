//---
var TplModalWipe = function() {
    //---
    let html = ''
    //---
    html += '<div id="modalWipe" class="modal fade">'
        html += '<div class="modal-dialog">'
            html += '<div class="modal-content">'
                html += '<div class="modal-header">'
                    html += '<span class="h6 text-white">' + i18next.t('modalWipe_title') + '</span>'
                    html += '<button type="button" class="btn p-0 border-0" data-bs-dismiss="modal">'
                       html += '<i class="fas fa-fw fa-times"></i>'
                    html += '</button>'
                html += '</div>'
                html += '<div class="modal-body border-bottom-0">'
                    html += '<div class="text-center text-white">' + i18next.t('modalWipe_text') + '</div>'
                    html += '<div class="text-danger text-center">' + i18next.t('modalWipe_info') + '</div>'
                html += '</div>'
                html += '<div class="modal-footer justify-content-center">'
                    html += '<button type="button" class="btn btn-sm btn-danger" onclick="window.App.wipeSave()">'
                        html += '<span><i class="fas fa-fw fa-skull"></i></span>'
                        html += '<span class="ms-1">' + i18next.t('btn_wipeSave') + '</span>'
                    html += '</button>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
var TplModalOffline = function() {
    //---
    let html = ''
    //---
    html += '<div id="modalOffline" class="modal fade">'
        html += '<div class="modal-dialog">'
            html += '<div class="modal-content">'
                html += '<div class="modal-header">'
                    html += '<span class="h6 text-white">' + i18next.t('modalOffline_title') + '</span>'
                    html += '<button type="button" class="btn p-0 border-0" data-bs-dismiss="modal">'
                        html += '<i class="fas fa-fw fa-times"></i>'
                    html += '</button>'
                html += '</div>'
                html += '<div class="modal-body border-bottom-0">'
                    html += '<div class="text-center text-normal">' + i18next.t('modalOffline_text') + '</div>'
                    html += '<div class="text-center text-white">' + i18next.t('modalOffline_info') + ' <span id="offlineTime"></span></div>'
                html += '</div>'
                html += '<div class="modal-footer justify-content-center">'
                    html += '<button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">'
                        html += i18next.t('btn_close')
                    html += '</button>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
var TplModalVictory = function() {
    //---
    let html = ''
    //---
    html += '<div id="modalVictory" class="modal fade">'
        html += '<div class="modal-dialog">'
            html += '<div class="modal-content">'
                html += '<div class="modal-header">'
                    html += '<span class="h6 text-white">' + i18next.t('modalVictory_title') + '</span>'
                    html += '<button type="button" class="btn p-0 border-0" data-bs-dismiss="modal">'
                        html += '<i class="fas fa-fw fa-times"></i>'
                    html += '</button>'
                html += '</div>'
                html += '<div class="modal-body border-bottom-0">'
                    html += '<div class="text-center h5 text-white">' + i18next.t('modalVictory_subTitle') + '</div>'
                    html += '<div class="text-center text-normal">' + i18next.t('modalVictory_text') + '</div>'
                    html += '<div class="my-3 text-center text-normal">'
                        html += '<img src="img/victory.png" width="32px" height="32px" />'
                    html += '</div>'
                    html += '<div class="text-center text-normal">' + i18next.t('modalVictory_info') + '</div>'
                html += '</div>'
                html += '<div class="modal-footer justify-content-center">'
                    html += '<button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">'
                        html += i18next.t('btn_close')
                    html += '</button>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}