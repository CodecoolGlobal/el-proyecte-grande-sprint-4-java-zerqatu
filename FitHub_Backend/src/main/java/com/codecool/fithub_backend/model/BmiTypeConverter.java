package com.codecool.fithub_backend.model;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class BmiTypeConverter implements AttributeConverter<BmiType, String> {

    @Override
    public String convertToDatabaseColumn(BmiType bmiType) {
        if (bmiType == null) {
            return null;
        }
        return bmiType.getBMIDescription();
    }

    @Override
    public BmiType convertToEntityAttribute(String BMIDescription) {
        if (BMIDescription == null) {
            return null;
        }
        return Stream.of(BmiType.values())
                .filter(bmiType -> bmiType.getBMIDescription().equals(BMIDescription))
                .findFirst()
                .orElseThrow(IllegalAccessError::new);
    }
}
