package com.codecool.fithub_backend.model;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class GenderConverter implements AttributeConverter<Gender, String> {
    @Override
    public String convertToDatabaseColumn(Gender gender) {
        if (gender == null) {
            return null;
        }
        return gender.getGenderDescription();
    }

    @Override
    public Gender convertToEntityAttribute(String genderDescription) {
        if (genderDescription == null) {
            return null;
        }
        return Stream.of(Gender.values())
                .filter(gender -> gender.getGenderDescription().equals(genderDescription))
                .findFirst()
                .orElseThrow(IllegalAccessError::new);
    }
}
