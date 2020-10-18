package com.example.exe2;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    EditText txtLogin;
    EditText txtSenha;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        txtLogin = findViewById(R.id.editText);
        txtSenha = findViewById(R.id.editText3);
    }

    public void onLoginClick(View v) {
        String[][] usuarios = {
            {"admin", "admin"},
            {"teste", "teste"}
        };

        String usr = txtLogin.getText().toString();
        String pass = txtLogin.getText().toString();
        Boolean login = false;

        for(int i = 0; i< usuarios.length; i++) {
            if (usuarios[i][0].equals(usr) && usuarios[i][1].equals(pass)) {
                login = true;
                break;
            }
        }

        if (login) {
            Intent calculo = new Intent(MainActivity.this, Calculo.class);
            startActivity(calculo);
        } else {
            showMessage("Falha", "Falha ao logar. Verifique suas credenciais");
        }
    }

    public void showMessage(String title, String text) {
        AlertDialog.Builder d  = new AlertDialog.Builder(this);
        d.setTitle(title);
        d.setMessage(text);
        d.setNeutralButton("OK", null);
        d.show();
    }
}
