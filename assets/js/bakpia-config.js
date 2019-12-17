function loadOrderan() {
    if (localStorage.list_data && localStorage.id_data) {
        list_data = JSON.parse(localStorage.getItem('list_data'));
        var data_app = "";
        if (list_data.length > 0) {
            data_app = '<table class="table table-striped table-dark">';
            data_app += '<thead>' +
                '<th>ID</th>' +
                '<th>Nama</th>' +
                '<th>Jumlah</th>' +
                '<th>Hapus Agenda</th>' +
                '<th>Lihat Agenda</th>' +
                '<th>Edit Agenda</th>' +
                '</thead> <tbody>';
 
            for (i in list_data) {
                data_app += '<tr>';
                data_app +=
                    '<td>' + list_data[i].id_data + ' </td>' +
                    '<td>' + list_data[i].nama + ' </td>' +
                    '<td>' + list_data[i].jumlah + ' </td>' +
                    '<td><a class="btn btn-danger btn-small" href="javascript:void(0)" onclick="hapusData(\'' + list_data[i].id_data + '\')">Hapus</a></td>' +
                    '<td><a class="btn btn-danger btn-small" href="javascript:void(0)" onclick="lihatData(\'' + list_data[i].id_data + '\')">Lihat</a></td>' +
                    '<td><a class="btn btn-warning btn-small" href="javascript:void(0)" onclick="editData(\'' + list_data[i].id_data + '\')">Edit</a></td>';
                data_app += '</tr>';
            }
 
            data_app += '</tbody></table>';
 
        }
        else {
            data_app = "Ayo pre order bakpia nya gan !";
        }
 
 
        $('#list-orderan').html(data_app);
        $('#list-orderan').hide();
        $('#list-orderan').fadeIn(100);
    }
}
 
function editData(id) {
 
    if (localStorage.list_data && localStorage.id_data) {
        list_data = JSON.parse(localStorage.getItem('list_data'));
        idx_data = 0;
        for (i in list_data) {
            if (list_data[i].id_data == id) {
                $("#eid_data").val(list_data[i].id_data);
                $("#enama").val(list_data[i].nama);
                $("#ejumlah").val(list_data[i].jumlah);
                list_data.splice(idx_data, 1);
            }
            idx_data++;
        }
        gantiMenu('edit-data');
 
    }
 
}
 
function lihatData(id) {
    if (localStorage.list_data && localStorage.id_data) {
        list_data = JSON.parse(localStorage.getItem('list_data'));
        idx_data = 0;
        for (i in list_data) {
            if (list_data[i].id_data == id) {
                $("#lid_data").val(list_data[i].id_data);
                $("#lnama").val(list_data[i].nama);
                $("#ljumlah").val(list_data[i].jumlah);
                list_data.splice(idx_data, 1);
            }
            idx_data++;
        }
        gantiMenu('lihat-data');
 
    }
}
 
 
function simpanData() {
 
    nama = $('#nama').val();
    tanggal = $('#jumlah').val();
 
    if (localStorage.list_data && localStorage.id_data) {
        list_data = JSON.parse(localStorage.getItem('list_data'));
        id_data = parseInt(localStorage.getItem('id_data'));
    }
    else {
        list_data = [];
        id_data = 0;
    }
 
    id_data++;
    list_data.push({ 'id_data': id_data, 'nama': nama, 'jumlah': jumlah });
    localStorage.setItem('list_data', JSON.stringify(list_data));
    localStorage.setItem('id_data', id_data);
    document.getElementById('form-data').reset();
    gantiMenu('list-orderan');
 
    return false;
}
 
function simpanEditData() {
 
    id_data = $('#eid_data').val();
    nama = $('#enama').val();
    tanggal = $('#ejumlah').val();
 
    list_data.push({ 'id_data': id_data, 'nama': nama, 'jumlah': jumlah });
    localStorage.setItem('list_data', JSON.stringify(list_data));
    document.getElementById('eform-data').reset();
    gantiMenu('list-orderan');
 
    return false;
}
 
function hapusData(id) {
 
    if (localStorage.list_data && localStorage.id_data) {
        list_data = JSON.parse(localStorage.getItem('list_data'));
 
        idx_data = 0;
        for (i in list_data) {
            if (list_data[i].id_data == id) {
                list_data.splice(idx_data, 1);
            }
            idx_data++;
        }
 
        localStorage.setItem('list_data', JSON.stringify(list_data));
        loadOrderan();
    }
}
 
 
function gantiMenu(menu) {
    if (menu == "list-orderan") {
        loadOrderan();
        $('#pre-order').hide();
        $('#list-orderan').fadeIn();
        $('#edit-data').hide();
        $('#lihat-data').hide();
    }
    else if (menu == "pre-order") {
        $('#pre-order').fadeIn();
        $('#list-orderan').hide();
        $('#edit-data').hide();
        $('#lihat-data').hide();
    } else if (menu == "edit-data") {
        $('#edit-data').fadeIn();
        $('#pre-order').hide();
        $('#list-orderan').hide();
        $('#lihat-data').hide();
    } else if (menu == "lihat-data") {
        $('#lihat-data').fadeIn();
        $('#edit-data').hide();
        $('#pre-order').hide();
        $('#list-orderan').hide();
    }
}