import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm', () => {

    let loginPageForm: LoginPageForm;
    let form: FormGroup;

    beforeEach(() => {
        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();
    })

    it('should create login form empty', () => {
        expect(form).not.toBeNull();
        
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email')?.value).toEqual("");
        expect(form.get('email')?.valid).toBeFalsy();
        
        expect(form.get('senha')).not.toBeNull();
        expect(form.get('senha')?.value).toEqual("");
        expect(form.get('senha')?.valid).toBeFalsy();
    })

    it('should have email invalid if the email is not valid', () => {
        form.get('email')?.setValue('Email inválido');

        expect(form.get('email')?.valid).toBeFalsy();
    })

    it('should have email valid if the email is valid', () => {
        form.get('email')?.setValue('emailvalido@email.com');

        expect(form.get('email')?.valid).toBeTruthy();
    })

    it('should have a valid form', () => {
        form.get('email')?.setValue('emailvalido@email.com');
        form.get('senha')?.setValue("Qualquersenha");

        expect(form.valid).toBeTruthy();
    })

})