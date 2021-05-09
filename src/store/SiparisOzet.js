import { makeAutoObservable } from 'mobx';
//const { URL_OBJECT } = require('../../config');


class SiparisOzet {
    UrunSiparisListesi=[];



    constructor() {
        // Call it here
        makeAutoObservable(this)
      
    }

    _get = {
        success: false,
        data: [],
        loading: true,
        error: null
    };

    _save = {
        success: false,
        data: null,
        loading: false,
        error: null,
        isUpdate: false
    }

    _update = {
        success: false,
        data: null,
        loading: false,
        error: null,
    }

    _delete = {
        success: false,
        data: null,
        loading: false,
        error: null
    }

    /*async get() {
        this._get.loading = true;
        this._get.success = false;

        return fetch(`${URL_OBJECT.API_URL}/${this.RESOURCE_NAME}`, {
            headers: {
                'Content-Type': 'application/json',
                'language': this.LANGUAGE
            },
            method: 'GET'
        }).then(async (response) => {
            if (response.status === 200) {
                this._get.success = true;
                this._get.error = null;
            } else {
                this._get.success = false;
                this._get.error = response.message;
            }
            return response.json();
        }).then((data) => {
            if (data) {
                this._get.data = data;
            } else {
                this._get.loading = false;
            }
            this._get.loading = false;

            return data
        }).catch((err) => {
            this._get.loading = false;
            this._get.error = err.message;
        });
    }

    async save(contract) {
        this._save.loading = true;
        this._save.success = false;

        return fetch(`${URL_OBJECT.API_URL}/${this.RESOURCE_NAME}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contract),
            method: 'POST',
        }).then(async (response) => {
            if (response.status === 200) {
                this._save.success = true;
                this._save.error = null;
            } else {
                this._save.success = false;
                this._save.error = response.message;
            }
            this._save.loading = false;
            return response.json();
        }).then((result) => {
            if (result) {
                this._save.message = result.message;
                this._save.data = result;
            } else {
                this._save.loading = false;
            }
            this._save.loading = false;
            return result
        }).catch((err) => {
            // handlError(500,err.message);
            this._save.loading = false;
            this._save.error = err.message;
        });
    }

    async update(contract) {
        this._update.loading = true;
        this._update.success = false;

        return fetch(`${URL_OBJECT.API_URL}/${this.RESOURCE_NAME}/${contract._id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contract),
            method: 'PUT',
        }).then(async (response) => {
            if (response.status === 200) {
                this._update.success = true;
                this._update.error = null;
            } else {
                this._update.success = false;
                this._update.error = response.message;
            }
            this._update.loading = false;
            return response.json();
        }).then((result) => {
            if (result) {
                this.get();
                this._update.message = result.message;
                this._update.data = result;
            } else {
                this._update.loading = false;
            }
            this._update.loading = false;
            return result
        }).catch((err) => {
            // handlError(500,err.message);
            this._update.loading = false;
            this._update.error = err.message;
        });
    }

    async delete(id) {
        this._delete.loading = true;
        this._delete.success = false;

        return fetch(`${URL_OBJECT.API_URL}/${this.RESOURCE_NAME}/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        }).then(async (response) => {
            if (response.status === 200) {
                this._delete.success = true;
                this._delete.error = null;
            } else {
                this._delete.success = false;
                this._delete.error = response.message;
            }
            this._delete.loading = false;
            return response.json();
        }).then((result) => {
            if (result) {
                this._delete.message = result.message;
                this._delete.data = result;
            } else {
                this._delete.loading = false;
            }
            this._delete.loading = false;

            this.get()
            return result
        }).catch((err) => {
            this._delete.loading = false;
            this._delete.error = err.message;
        });
    }
    */

}

export default new SiparisOzet()