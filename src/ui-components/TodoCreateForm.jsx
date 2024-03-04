/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTodo } from "../graphql/mutations";
const client = generateClient();
export default function TodoCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    pointName: "",
    pointDesc: "",
    timestamp: "",
    siteName: "",
    value: "",
  };
  const [pointName, setPointName] = React.useState(initialValues.pointName);
  const [pointDesc, setPointDesc] = React.useState(initialValues.pointDesc);
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [siteName, setSiteName] = React.useState(initialValues.siteName);
  const [value, setValue] = React.useState(initialValues.value);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPointName(initialValues.pointName);
    setPointDesc(initialValues.pointDesc);
    setTimestamp(initialValues.timestamp);
    setSiteName(initialValues.siteName);
    setValue(initialValues.value);
    setErrors({});
  };
  const validations = {
    pointName: [{ type: "Required" }],
    pointDesc: [],
    timestamp: [{ type: "Required" }],
    siteName: [],
    value: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          pointName,
          pointDesc,
          timestamp,
          siteName,
          value,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createTodo.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TodoCreateForm")}
      {...rest}
    >
      <TextField
        label="Point name"
        isRequired={true}
        isReadOnly={false}
        value={pointName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pointName: value,
              pointDesc,
              timestamp,
              siteName,
              value,
            };
            const result = onChange(modelFields);
            value = result?.pointName ?? value;
          }
          if (errors.pointName?.hasError) {
            runValidationTasks("pointName", value);
          }
          setPointName(value);
        }}
        onBlur={() => runValidationTasks("pointName", pointName)}
        errorMessage={errors.pointName?.errorMessage}
        hasError={errors.pointName?.hasError}
        {...getOverrideProps(overrides, "pointName")}
      ></TextField>
      <TextField
        label="Point desc"
        isRequired={false}
        isReadOnly={false}
        value={pointDesc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pointName,
              pointDesc: value,
              timestamp,
              siteName,
              value,
            };
            const result = onChange(modelFields);
            value = result?.pointDesc ?? value;
          }
          if (errors.pointDesc?.hasError) {
            runValidationTasks("pointDesc", value);
          }
          setPointDesc(value);
        }}
        onBlur={() => runValidationTasks("pointDesc", pointDesc)}
        errorMessage={errors.pointDesc?.errorMessage}
        hasError={errors.pointDesc?.hasError}
        {...getOverrideProps(overrides, "pointDesc")}
      ></TextField>
      <TextField
        label="Timestamp"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={timestamp && convertToLocal(new Date(timestamp))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              pointName,
              pointDesc,
              timestamp: value,
              siteName,
              value,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <TextField
        label="Site name"
        isRequired={false}
        isReadOnly={false}
        value={siteName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pointName,
              pointDesc,
              timestamp,
              siteName: value,
              value,
            };
            const result = onChange(modelFields);
            value = result?.siteName ?? value;
          }
          if (errors.siteName?.hasError) {
            runValidationTasks("siteName", value);
          }
          setSiteName(value);
        }}
        onBlur={() => runValidationTasks("siteName", siteName)}
        errorMessage={errors.siteName?.errorMessage}
        hasError={errors.siteName?.hasError}
        {...getOverrideProps(overrides, "siteName")}
      ></TextField>
      <TextField
        label="Value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={value}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              pointName,
              pointDesc,
              timestamp,
              siteName,
              value: value,
            };
            const result = onChange(modelFields);
            value = result?.value ?? value;
          }
          if (errors.value?.hasError) {
            runValidationTasks("value", value);
          }
          setValue(value);
        }}
        onBlur={() => runValidationTasks("value", value)}
        errorMessage={errors.value?.errorMessage}
        hasError={errors.value?.hasError}
        {...getOverrideProps(overrides, "value")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
