package com.example.exe1;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.EditText;
import androidx.appcompat.app.AlertDialog;

public class MainActivity extends AppCompatActivity {

    EditText n1, n2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        n1 = (EditText) findViewById(R.id.editText3);
        n2 = (EditText) findViewById(R.id.editText4);
    }

    public void soma(View v) {
        double resultado = calcula(n1.getText().toString(), n2.getText().toString(), "+");
        this.showDialog("A soma é: " + Double.toString(resultado));
    }

    public void subtrai(View v) {
        double resultado = calcula(n1.getText().toString(), n2.getText().toString(), "-");
        this.showDialog("A subtração é: " + Double.toString(resultado));
    }

    public void divide(View v) {
        double resultado = calcula(n1.getText().toString(), n2.getText().toString(), "/");
        this.showDialog("A divisão é: " + Double.toString(resultado));
    }

    public void multiplica(View v) {
        double resultado = calcula(n1.getText().toString(), n2.getText().toString(), "*");
        this.showDialog("A multiplicação é: " + Double.toString(resultado));
    }

    public Double calcula(String __n1, String __n2, String operation) {
        try {
            Double _n1 = Double.parseDouble(__n1);
            Double _n2 = Double.parseDouble(__n2);
            switch (operation) {
                case "+":
                    return _n1 + _n2;
                case "-":
                    return _n1 - _n2;
                case "*":
                    return _n1 * _n2;
                case "/":
                    return _n1 / _n2;
            }
        }
        catch(NumberFormatException e)
        {
            this.showDialog("Não foi possível somar. Por favor, digite números válidos.");
        }

        return 0.0;
    }

    public void showDialog(String msg1) {
        AlertDialog.Builder msg = new AlertDialog.Builder(this);

        msg.setTitle("Resultado");
        msg.setMessage(msg1);
        msg.setNeutralButton("OK", null);
        msg.show();
    }
}
