"use client";

import { Flex, Select, Slider, Switch, Typography } from "antd";

import {
  CheckOutlined,
  FontSizeOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";

import useSettingsStore, { PRIMARY_PRESETS } from "@/stores/settings";
import { cn } from "@/utils/cn";

const { Text } = Typography;

const Settings = () => {
  const {
    isDark,
    fontType,
    fontSize,
    primaryColor,
    toggleTheme,
    setFontType,
    setFontSize,
    setPrimaryColor,
  } = useSettingsStore();

  const selectedPreset =
    PRIMARY_PRESETS.find(
      (preset) => preset.value.toLowerCase() === primaryColor.toLowerCase(),
    ) ?? PRIMARY_PRESETS[0];

  return (
    <Flex vertical gap={20}>
      {/* Theme Card */}
      <div className="app-settings-card">
        <Flex align="center" justify="space-between">
          <div className="app-settings-icon">
            {isDark ? <MoonOutlined /> : <SunOutlined />}
          </div>

          <Switch
            checked={isDark}
            onChange={toggleTheme}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />
        </Flex>

        <Flex vertical gap={4}>
          <Text strong className="app-settings-title">
            تغییر حالت
          </Text>
          <Text className="app-settings-subtitle">
            {isDark ? "حالت تاریک فعال است" : "حالت روشن فعال است"}
          </Text>
        </Flex>
      </div>

      {/* Font Size */}
      <div className="app-settings-card">
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={10}>
            <div className="app-settings-icon">
              <FontSizeOutlined />
            </div>

            <Flex vertical gap={2}>
              <Text strong className="app-settings-title">
                اندازه فونت
              </Text>
              <Text className="app-settings-subtitle">اندازه متن برنامه</Text>
            </Flex>
          </Flex>

          <Text strong className="app-settings-value">
            {fontSize}px
          </Text>
        </Flex>

        <Slider
          min={12}
          max={20}
          step={1}
          value={fontSize}
          onChange={setFontSize}
          marks={{ 12: "12", 14: "14", 16: "16", 18: "18", 20: "20" }}
          tooltip={{ formatter: (value) => `${value}px` }}
        />
      </div>

      {/* Font Type */}
      <div className="app-settings-card">
        <Flex align="center" justify="space-between">
          <div className="app-settings-icon">
            <FontSizeOutlined />
          </div>

          <Select
            value={fontType}
            onChange={setFontType}
            style={{ width: 130 }}
            options={[
              { value: "yekan", label: "یکان" },
              { value: "vazir", label: "وزیر" },
            ]}
          />
        </Flex>

        <Flex vertical gap={4}>
          <Text strong className="app-settings-title">
            نوع فونت
          </Text>
          <Text className="app-settings-subtitle">
            فونت اصلی برنامه را انتخاب کنید
          </Text>
        </Flex>
      </div>

      {/* Primary Color */}
      <div className="app-settings-card">
        <Flex align="center" justify="space-between">
          <div className="app-settings-icon">
            <CheckOutlined />
          </div>

          <Text strong className="app-settings-value">
            {selectedPreset.name}
          </Text>
        </Flex>

        <Flex vertical gap={4}>
          <Text strong className="app-settings-title">
            رنگ اصلی / Preset
          </Text>
          <Text className="app-settings-subtitle">
            رنگ اصلی رابط کاربری را انتخاب کنید
          </Text>
        </Flex>

        <Flex wrap gap={10}>
          {PRIMARY_PRESETS.map((preset) => {
            const active =
              preset.value.toLowerCase() === primaryColor.toLowerCase();

            return (
              <button
                key={preset.value}
                type="button"
                onClick={() => setPrimaryColor(preset)}
                title={preset.name}
                aria-label={`انتخاب رنگ ${preset.name}`}
                className={cn(
                  "app-settings-color-swatch",
                  active
                    ? "app-settings-color-swatch--active"
                    : "app-settings-color-swatch--inactive",
                )}
                style={{
                  backgroundColor: preset.value,
                  ["--app-swatch-color" as string]: preset.value,
                }}
              />
            );
          })}
        </Flex>
      </div>
    </Flex>
  );
};

export default Settings;
