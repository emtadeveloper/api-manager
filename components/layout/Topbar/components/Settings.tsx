"use client";

import { useEffect } from "react";

import { Flex, Select, Slider, Switch, Typography } from "antd";

import { CheckOutlined, FontSizeOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";

import useSettingsStore, { PRIMARY_PRESETS } from "@/stores/settings";

const { Text } = Typography;

const Settings = () => {
  const { isDark, fontType, fontSize, primaryColor, hydrate, toggleTheme, setFontType, setFontSize, setPrimaryColor } =
    useSettingsStore();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const selectedPreset =
    PRIMARY_PRESETS.find((preset) => preset.value.toLowerCase() === primaryColor.toLowerCase()) ?? PRIMARY_PRESETS[0];

  return (
    <Flex vertical gap={20}>
      {/* Theme Card */}
      <Flex
        vertical
        gap={14}
        style={{
          padding: "16px",
          borderRadius: "14px",
          backgroundColor: "color-mix(in srgb, var(--app-surface) 90%, var(--app-text) 10%)",
          border: "1px solid var(--app-border)",
        }}
      >
        <Flex align="center" justify="space-between">
          <Flex
            align="center"
            justify="center"
            style={{
              width: 40,
              height: 40,
              borderRadius: "10px",
              backgroundColor: "color-mix(in srgb, var(--app-primary) 12%, transparent)",
              color: "var(--app-primary)",
              fontSize: 20,
            }}
          >
            {isDark ? <MoonOutlined /> : <SunOutlined />}
          </Flex>

          <Switch
            checked={isDark}
            onChange={toggleTheme}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />
        </Flex>

        <Flex vertical gap={4}>
          <Text
            strong
            style={{
              fontSize: 14,
              color: "var(--app-text)",
            }}
          >
            تغییر حالت
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: "var(--app-text-muted)",
            }}
          >
            {isDark ? "حالت تاریک فعال است" : "حالت روشن فعال است"}
          </Text>
        </Flex>
      </Flex>

      {/* Font Size */}
      <Flex
        vertical
        gap={14}
        style={{
          padding: "16px",
          borderRadius: "14px",
          backgroundColor: "color-mix(in srgb, var(--app-surface) 90%, var(--app-text) 10%)",
          border: "1px solid var(--app-border)",
        }}
      >
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={10}>
            <Flex
              align="center"
              justify="center"
              style={{
                width: 40,
                height: 40,
                borderRadius: "10px",
                backgroundColor: "color-mix(in srgb, var(--app-primary) 12%, transparent)",
                color: "var(--app-primary)",
                fontSize: 20,
              }}
            >
              <FontSizeOutlined />
            </Flex>

            <Flex vertical gap={2}>
              <Text
                strong
                style={{
                  fontSize: 14,
                  color: "var(--app-text)",
                }}
              >
                اندازه فونت
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  color: "var(--app-text-muted)",
                }}
              >
                اندازه متن برنامه
              </Text>
            </Flex>
          </Flex>

          <Text
            strong
            style={{
              color: "var(--app-primary)",
              fontSize: 13,
            }}
          >
            {fontSize}px
          </Text>
        </Flex>

        <Slider
          min={12}
          max={20}
          step={1}
          value={fontSize}
          onChange={setFontSize}
          marks={{
            12: "12",
            14: "14",
            16: "16",
            18: "18",
            20: "20",
          }}
          tooltip={{
            formatter: (value) => `${value}px`,
          }}
        />
      </Flex>

      {/* Font Type */}
      <Flex
        vertical
        gap={14}
        style={{
          padding: "16px",
          borderRadius: "14px",
          backgroundColor: "color-mix(in srgb, var(--app-surface) 90%, var(--app-text) 10%)",
          border: "1px solid var(--app-border)",
        }}
      >
        <Flex align="center" justify="space-between">
          <Flex
            align="center"
            justify="center"
            style={{
              width: 40,
              height: 40,
              borderRadius: "10px",
              backgroundColor: "color-mix(in srgb, var(--app-primary) 12%, transparent)",
              color: "var(--app-primary)",
              fontSize: 20,
            }}
          >
            <FontSizeOutlined />
          </Flex>

          <Select
            value={fontType}
            onChange={setFontType}
            style={{
              width: 130,
            }}
            options={[
              {
                value: "yekan",
                label: "یکان",
              },
              {
                value: "vazir",
                label: "وزیر",
              },
            ]}
          />
        </Flex>

        <Flex vertical gap={4}>
          <Text
            strong
            style={{
              fontSize: 14,
              color: "var(--app-text)",
            }}
          >
            نوع فونت
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: "var(--app-text-muted)",
            }}
          >
            فونت اصلی برنامه را انتخاب کنید
          </Text>
        </Flex>
      </Flex>

      {/* Primary Color */}
      <Flex
        vertical
        gap={14}
        style={{
          padding: "16px",
          borderRadius: "14px",
          backgroundColor: "color-mix(in srgb, var(--app-surface) 90%, var(--app-text) 10%)",
          border: "1px solid var(--app-border)",
        }}
      >
        <Flex align="center" justify="space-between">
          <Flex
            align="center"
            justify="center"
            style={{
              width: 40,
              height: 40,
              borderRadius: "10px",
              backgroundColor: "color-mix(in srgb, var(--app-primary) 12%, transparent)",
              color: "var(--app-primary)",
              fontSize: 20,
            }}
          >
            <CheckOutlined />
          </Flex>

          <Text
            strong
            style={{
              color: "var(--app-primary)",
              fontSize: 14,
            }}
          >
            {selectedPreset.name}
          </Text>
        </Flex>

        <Flex vertical gap={4}>
          <Text
            strong
            style={{
              fontSize: 14,
              color: "var(--app-text)",
            }}
          >
            رنگ اصلی / Preset
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: "var(--app-text-muted)",
            }}
          >
            رنگ اصلی رابط کاربری را انتخاب کنید
          </Text>
        </Flex>

        <Flex wrap gap={10}>
          {PRIMARY_PRESETS.map((preset) => {
            const active = preset.value.toLowerCase() === primaryColor.toLowerCase();

            return (
              <button
                key={preset.value}
                type="button"
                onClick={() => setPrimaryColor(preset)}
                title={preset.name}
                aria-label={`انتخاب رنگ ${preset.name}`}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: active ? "3px solid var(--app-text)" : "2px solid transparent",
                  outline: active ? `2px solid ${preset.value}` : "1px solid var(--app-border)",
                  outlineOffset: active ? 1 : 0,
                  padding: 0,
                  backgroundColor: preset.value,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              />
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Settings;
