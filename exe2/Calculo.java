package com.example.exe2;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.ToggleButton;

public class Calculo extends AppCompatActivity {


    EditText txtConsumoTotal;
    EditText txtCouvertPorpessoa;
    EditText txtNumeroPessoas;
    EditText txtCustoTotal;
    EditText txtValorPorPessoa;
    ToggleButton tglTaxaServico;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_calculo);

        txtConsumoTotal = findViewById(R.id.edtConsumoTotal);
        txtCouvertPorpessoa = findViewById(R.id.edtCouvertPorPessoa);
        txtNumeroPessoas = findViewById(R.id.edtQtdPessoas);
        txtCustoTotal = findViewById(R.id.edtCustoTotal);
        txtValorPorPessoa = findViewById(R.id.edtValorPessoa);
        tglTaxaServico = findViewById(R.id.tglTaxaServico);
    }

    public void calcula(View v) {
        Double total = Double.parseDouble(txtConsumoTotal.getText().toString());
        Double couvert = Double.parseDouble(txtCouvertPorpessoa.getText().toString());
        Double pessoas = Double.parseDouble(txtNumeroPessoas.getText().toString());
        Boolean taxa = tglTaxaServico.isChecked();

        Double total_couvert = pessoas * couvert;

        if (taxa) {
            total = total * 1.1;
        }

        total = total + total_couvert;
        Double total_pessoa = total / pessoas;

        txtCustoTotal.setText(total.toString());
        txtValorPorPessoa.setText(total_pessoa.toString());

    }

    public void showMessage(String title, String text) {
        AlertDialog.Builder d  = new AlertDialog.Builder(this);
        d.setTitle(title);
        d.setMessage(text);
        d.setNeutralButton("OK", null);
        d.show();
    }
}
